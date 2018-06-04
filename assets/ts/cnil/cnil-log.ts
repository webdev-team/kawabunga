import {CnilCategories} from './cnil-cookie';

export class CnilLog {
    constructor(
        public cookieId: string,
        public actionType: string,
        public categories: CnilCategories
    ) {

    }
}