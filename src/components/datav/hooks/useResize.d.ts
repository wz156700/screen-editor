export declare type RefreshLayoutSize = () => void;
export interface ExposeWithRefreshLayoutSize {
    refreshLayoutSize: RefreshLayoutSize;
}
export declare function useResize(): {
    domSize: {
        width: number;
        height: number;
    };
    autoBindRef: (ref: any) => void;
    refreshLayoutSize: RefreshLayoutSize;
};
