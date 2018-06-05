export declare class Observable<T> {
    handlers: any[];
    observe(handler: (value: T) => void): void;
    fire(message?: T): void;
}
