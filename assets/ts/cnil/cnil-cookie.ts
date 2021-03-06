import * as userAgent from '../../js/env/user-agent';
import * as cookies from 'js-cookie';
import * as env from '../env/env';
import * as random from '../utils/random';
import {cnilCookieAutoUpdater} from "./cnil-cookie-auto-updater";
import {Observable} from '../utils/observable';

export interface CnilCategories {
    ads: boolean;
    analytics: boolean;
    social: boolean;
}

export interface CnilCategoriesChangeEvent {
    value: CnilCategories;
    oldValue: CnilCategories;
}

// categories
export const ADS = 'ads';
export const ANALYTICS = 'analytics';
export const SOCIAL = 'social';

export const COOKIE_NAME = 'cnil-cookie-v2';
export const COOKIE_ID_NAME = 'cnil-cookie-id';
const ONE_YEAR = 365;
export const COOKIE_DURATION = ONE_YEAR + 28; // about 13 months
export const COOKIE_ID_DURATION = 10 * ONE_YEAR;

export const ALL_ON : CnilCategories = {ads: true, analytics: true, social: true};
export const ALL_OFF : CnilCategories = {ads: false, analytics: false, social: false};

// action types
export const BANNER_ACTION = 'banner';
export const CLICK_ACTION = 'click';
export const SCROLL_ACTION = 'scroll';
export const PREFERENCES_ACTION = 'preferences';

export namespace cnilCookie {
    let observable = new Observable<CnilCategoriesChangeEvent>();

    export function ensureId(): void {
        if (!cookies.get(COOKIE_ID_NAME)) {
            cookies.set(COOKIE_ID_NAME, random.uuid(), {expires: COOKIE_ID_DURATION, path: '/', domain: env.getCookieDomain()})
        }
    }

    export function getId(): string {
        if (!cookies.get(COOKIE_ID_NAME)) {
            ensureId();
        }

        return cookies.get(COOKIE_ID_NAME);
    }

    export function writeValues(categories: CnilCategories, actionType?: string): void {
        let oldValue = readValues();

        cookies.set(COOKIE_NAME, JSON.stringify(categories), {expires: COOKIE_DURATION, path: '/', domain: env.getCookieDomain()});

        observable.fire({value: readValues(), oldValue: oldValue});
    }

    export function setCategory(category: string, value: boolean, actionType?: string): void {
        let cookie: CnilCategories = readValues() || {ads: true, analytics: true, social: true};

        cookie[category] = value;
        writeValues(cookie, actionType);
    }

    export function readValues(): CnilCategories {
        let values = cookies.get(COOKIE_NAME);

        try {
            return JSON.parse(values);
        } catch (e) {
            return null;
        }
    }

    export function hasValidCookie(): boolean {
        return readValues() != null;
    }

    export function isOn(category: string): boolean {
        let categories = readValues();

        if (categories) {
            return categories[category];
        } else {
            return false;
        }
    }

    export function isActive() {
        return !userAgent.isBot() && !cnilCookie.hasValidCookie() && !cnilCookieAutoUpdater.isCnilSafe();
    }

    export function onChange(handler: (event: CnilCategoriesChangeEvent) => void) {
        observable.observe(handler);
    }
}
