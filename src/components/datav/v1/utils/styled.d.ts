export declare const styled: {
    <T>(StyledComponent: T): (style: TemplateStringsArray) => (className: string) => T;
    setClassNamePrefix: (classNamePrefix: string) => void;
    getClassNameForBind: (className: string) => string;
    span: (style: TemplateStringsArray) => (className: string) => (props: any, { slots }: {
        slots: any;
    }) => JSX.Element;
    div: (style: TemplateStringsArray) => (className: string) => (props: any, { slots }: {
        slots: any;
    }) => JSX.Element;
    img: (style: TemplateStringsArray) => (className: string) => (props: any) => JSX.Element;
    svg: (style: TemplateStringsArray) => (className: string) => (props: any, { slots }: {
        slots: any;
    }) => JSX.Element;
};
export declare const setClassNamePrefix: (classNamePrefix: string) => void;
