import { IChildrenProps } from "./childrenProps.interface"

export interface IViewProps extends IChildrenProps {
    height?: string;
    width?: string;
    flexDirection?: string;
}