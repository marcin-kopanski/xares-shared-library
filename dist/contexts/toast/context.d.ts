import { FC, PropsWithChildren } from "react";
type State = {
    showInfo: (message: string) => void;
    showSuccess: (message: string) => void;
    showError: (message: string) => void;
    showWarning: (message: string) => void;
};
export interface SnackbarMessage {
    message: string;
    key: number;
}
export declare const ToastContext: import("react").Context<State | undefined>;
export declare const ToastContextProvider: FC<PropsWithChildren>;
export {};
//# sourceMappingURL=context.d.ts.map