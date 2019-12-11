import * as moment from 'moment';

interface Capping {
    hits: Array<number>;
}

const PHASE_LIMIT = 5;
const MAX_HITS_ON_PHASE_ONE = 3;

const elapsedTime = (t1, t2, unit) => Math.abs(moment(t1).diff(t2, unit));
const elapsedDays = (t1, t2) => elapsedTime(t1, t2, 'days');

export class PassMediaCapping {
    private _capping: Capping;
    private _phase: number;
    private _cookieExists: boolean = false;

    constructor(val: Capping = null) {

        if (val === null) {
            this._capping = { hits: [] };
        } else {
            this._cookieExists = true;
            this._capping = val;
        }

        this._phase = this.computePhase();
    }

    set value(capping: Capping) {
        this._capping = capping;
    }

    set hits(hits: Array<number>) {
        this._capping.hits = hits;
    }

    get firstHit(): number {
        return this._capping.hits[0];
    }

    get lastHit(): number {
        return this._capping.hits[this._capping.hits.length - 1];
    }

    getPhase(): number {
        return this._phase;
    }

    getJSON(): Capping {
        return this._capping;
    }

    create(date): Capping {
        return {
            hits: [date]
        }
    };

    hit(date: number = null): void {
        date = date ? date : moment().valueOf();

        if (this.canHit(date)) {
            this._capping.hits.push(date);
            this._phase = this.computePhase();
        }
    }

    computePhase(): number {
        let refHit = this.firstHit;
        let phase = 1;

        this._capping.hits.forEach((hit) => {
            if (elapsedDays(refHit, hit) >= 30) {
                refHit = hit;
                phase++;
            }
        });

        return phase;
    }

    canHit(date: number = null): boolean {
        if (this._cookieExists) {
            date = date ? date : moment().valueOf();
            return (this._phase === 1) ? this.isQuantityRespected() && this.isFrequencyRespected(date) : this._phase <= PHASE_LIMIT;
        } else {
            return true;
        }
    }

    isQuantityRespected(): boolean {
        return (this._phase === 1) ? this._capping.hits.length < MAX_HITS_ON_PHASE_ONE : true;
    }

    isFrequencyRespected(date): boolean {
        let moreThanOneDayElapsed = elapsedDays(date,  this.lastHit) >= 1;
        let moreThanThirtyDaysElapsed = elapsedDays(date,  this.lastHit) >= 30;
        return (this._phase === 1) ? moreThanOneDayElapsed : moreThanThirtyDaysElapsed;
    }
}

export default PassMediaCapping;
