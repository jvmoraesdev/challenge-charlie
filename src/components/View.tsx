import styled from 'styled-components'
import React from 'react'
import { IViewProps } from '../interfaces/view.interface'

const ViewContainer = styled.div<IViewProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    flex-direction: ${props => props.flexDirection || 'row'};;
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
`

const View: React.FC<IViewProps> = ({ children, width, height, flexDirection }) => {
    return <ViewContainer
        width={width}
        height={height}
        flexDirection={flexDirection}
    >
        {children}
    </ViewContainer>
}

export default View;