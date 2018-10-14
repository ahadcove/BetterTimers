declare enum KEYS {
    TIMEOUT = "timeout",
    INTERVAL = "interval"
}
declare class BetterTimer {
    protected timer: any;
    protected type: KEYS;
    protected active: boolean;
    protected cleared: boolean;
    constructor(type: KEYS);
    getType: () => KEYS;
    isActive: () => boolean;
}
declare class Timeout extends BetterTimer {
    constructor(fn: Function, timeout: number | string);
    clear: () => void;
}
declare class Interval extends BetterTimer {
    constructor(fn: Function, interval: number | string);
    clear: () => void;
}
declare const Clear: (timer: any) => any;
export { KEYS, Timeout, Interval, Clear };
//# sourceMappingURL=index.d.ts.map