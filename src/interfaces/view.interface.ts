import { IChildrenProps } from "./childrenProps.interface"
import { ColorTheme } from "./types";

export interface IViewProps extends IChildrenProps {
    className?: string;
    colorTheme?: ColorTheme;
}