import { PingReturn, VendorConsentData, VendorConsents } from './iab';
import { CnilCategories } from './cnil-cookie';
export declare function ping(callback: (pingReturn: PingReturn, success: boolean) => void): void;
export declare function getConsentData(consentStringVersion: string, callback: (vendorConsentData: VendorConsentData, success: boolean) => void): void;
export declare function getVendorConsents(vendorsId: number[], callback: (vendorConsents: VendorConsents, success: boolean) => void): void;
export declare function onCnilCategoriesChange(categories: CnilCategories): void;
