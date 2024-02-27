declare function createDecoration12Props(): {
    scanDuration: {
        type: NumberConstructor;
        default: number;
    };
    haloDuration: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: import("vue").PropType<[string, string]>;
        default: () => any[];
    };
};
export declare type Decoration12Props = ReturnType<typeof createDecoration12Props>;
export declare const Decoration12: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            color: [string, string];
            scanDuration: number;
            haloDuration: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            scanDuration: {
                type: NumberConstructor;
                default: number;
            };
            haloDuration: {
                type: NumberConstructor;
                default: number;
            };
            color: {
                type: import("vue").PropType<[string, string]>;
                default: () => any[];
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "color" | "scanDuration" | "haloDuration">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            scanDuration: {
                type: NumberConstructor;
                default: number;
            };
            haloDuration: {
                type: NumberConstructor;
                default: number;
            };
            color: {
                type: import("vue").PropType<[string, string]>;
                default: () => any[];
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            color: [string, string];
            scanDuration: number;
            haloDuration: number;
        }, {}, string> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        scanDuration: {
            type: NumberConstructor;
            default: number;
        };
        haloDuration: {
            type: NumberConstructor;
            default: number;
        };
        color: {
            type: import("vue").PropType<[string, string]>;
            default: () => any[];
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    scanDuration: {
        type: NumberConstructor;
        default: number;
    };
    haloDuration: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: import("vue").PropType<[string, string]>;
        default: () => any[];
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    color: [string, string];
    scanDuration: number;
    haloDuration: number;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export {};
