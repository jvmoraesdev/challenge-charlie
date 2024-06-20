import styled from 'styled-components'
import React from 'react'
import { IViewProps } from '../interfaces/view.interface'
import { COLORS, COLORTHEME } from '../assets/colors'

const ViewContainer = styled.div<IViewProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${props =>
        props.className === "row primary" && props.colorTheme && `
        background-color: ${COLORTHEME[props.colorTheme].primary};
        background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))
    `}

    ${props =>
        props.className === "row secondary" && props.colorTheme && `
        background-color: ${COLORTHEME[props.colorTheme].seacondary};
    `}

    ${props =>
        props.className === "row tertiary" && props.colorTheme && `
        background-color: ${COLORTHEME[props.colorTheme].tertiary};
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