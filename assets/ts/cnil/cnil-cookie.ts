import * as cookies from 'js-cookie';
import * as env from '../env/env';

export interface CnilCategories {
    ads: boolean;
    analytics: boolean;
    social: boolean;
    player: boolean;
}

// categories
export const ADS = 'ads';
export const ANALYTICS = 'analytics';
export const SOCIAL = 'social';
export const PLAYER = 'player';

export const COOKIE_NAME = 'cnil-cookie-v2';
export const COOKIE_DURATION = 365 + 28; // about 13 months

export const ALL_ON : CnilCategories = {ads: true, analytics: true, social: true, player: true};
export const ALL_OFF : CnilCategories = {ads: false, analytics: false, social: false, player: false};

export namespace cnilCookie {
    export function writeValues(categories: CnilCategories): void {
        cookies.set(COOKIE_NAME, JSON.stringify(categories), {expires: COOKIE_DURATION, path: '/', domain: env.getCookieDomain()});
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
        return this.readValues() != null;
    }

    export function isOn(category: string) {
        let categories = this.readValues();

        if (categories) {
            return categories[category];
        } else {
            return false;
        }
    }
}