
export class Observable<T> {
    handlers = [];

    observe(handler: (value: T) => void) {
        this.handlers.push(handler);
    }

    fire(message?: T) {
        this.handlers.forEach(function(handler) {
            handler(message);
        });
    }
}
