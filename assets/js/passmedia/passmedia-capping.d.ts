interface Capping {
    hits: Array<number>;
}
export default class PassMediaCapping {
    private _capping;
    private _phase;
    constructor(val?: Capping);
    value: Capping;
    hits: Array<number>;
    readonly firstHit: number;
    readonly lastHit: number;
    getPhase(): number;
    getJSON(): Capping;
    create(date: any): Capping;
    hit(date?: number): void;
    computePhase(): number;
    canHit(date?: number): boolean;
    isQuantityRespected(): boolean;
    isFrequencyRespected(date: any): boolean;
}
export {};
