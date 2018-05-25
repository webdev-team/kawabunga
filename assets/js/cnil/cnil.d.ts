import { cnilCookie } from './cnil-cookie';
import { cnilCookieBanner } from "./cnil-cookie-banner";
import { cnilCookieFormPage } from './cnil-cookie-form-page';
export declare namespace cnil {
    let cookie: typeof cnilCookie;
    let banner: typeof cnilCookieBanner;
    let formPage: typeof cnilCookieFormPage;
    function v2Active(): boolean;
    function activateV2(): void;
    function isOn(category: string): boolean;
    function isOff(category: string): boolean;
}
