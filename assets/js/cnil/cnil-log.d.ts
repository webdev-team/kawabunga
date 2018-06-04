import { CnilCategories } from './cnil-cookie';
export declare class CnilLog {
    cookieId: string;
    actionType: string;
    categories: CnilCategories;
    constructor(cookieId: string, actionType: string, categories: CnilCategories);
}
