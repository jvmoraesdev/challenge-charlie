import styled from 'styled-components'
import React from 'react'
import { IChildrenProps } from '../interfaces/childrenProps.interface'
import { COLORS } from '../assets/colors'
import { screenBreakpoints } from '../assets/screenBreakpoints'

const CardContainer = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    /* border-radius: 0.8rem; */
    box-shadow: 4px 4px 2px ${COLORS.gray};
    width: 50%;
    height: 100%;

    @media (max-width: ${screenBreakpoints.tabletsMD}){
        width: 100%;
        height: 100%;
    }
`

const Card: React.FC<IChildrenProps> = ({ children }) => {
    return <CardContainer>
        {children}
    </CardContainer>
}

export default Card;