declare global {
    interface Window {
        __cmp: (command: string, parameter?: any, callback?: any) => void;
    }
}
export {};
