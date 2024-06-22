import styled from 'styled-components'
import React from 'react'
import { IViewProps } from '../interfaces/view.interface'
import { COLORS, COLORTHEME } from '../utils/colors'
import { hexToRgba } from '../utils/convertHextoRgba';

const ViewContainer = styled.div<IViewProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${props =>
        props.className === "row primary" && props.colorTheme && `
        background-color: ${hexToRgba(COLORTHEME[props.colorTheme].primary, 0.6)};
    `};

    ${props =>
        props.className === "row secondary" && props.colorTheme && `
        background-color: ${hexToRgba(COLORTHEME[props.colorTheme].secondary, 0.95)};
    `}

    ${props =>
        props.className === "row tertiary" && props.colorTheme && `
        background-color: ${hexToRgba(COLORTHEME[props.colorTheme].tertiary, 1)};
    `}
`

const View: React.FC<IViewProps> = ({ children, className, colorTheme }) => {
    return <ViewContainer
        className={className}
        colorTheme={colorTheme}
    >
        {children}
    </ViewContainer>
}

export default View;