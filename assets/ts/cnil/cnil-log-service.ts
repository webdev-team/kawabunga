import * as http from 'superagent';
import * as endpoints from '../env/endpoints';
import {CnilLog} from './cnil-log';

export namespace cnilLogService {
    export function save(log: CnilLog): void {
        http.post(endpoints.www()).send(log).end();
    }
}