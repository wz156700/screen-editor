export declare function withPrefix(loggerPrefix: string): {
    info(...msg: string[]): void;
    warn(...msg: string[]): void;
    error(...msg: string[]): void;
};
