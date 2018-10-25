import { ConsentString } from 'consent-string';
export declare namespace euconsent {
    const COOKIE_NAME = "euconsent";
    const CMP_VERSION = 1;
    const CMP_ID = 136;
    function newFullConsent(): ConsentString;
    function newNoConsent(): ConsentString;
    function allPurposeIds(): number[];
    function allVendorIds(): number[];
    namespace cookie {
        function exists(): boolean;
        function read(): ConsentString;
        function write(consent: ConsentString): void;
    }
}
