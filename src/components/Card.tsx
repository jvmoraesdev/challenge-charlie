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
    width: 40vw;
    height: 100vh;

    @media (max-width: ${screenBreakpoints.tabletsMD}){
        width: 100vw;
        height: 100vh;
    }
`

const Card: React.FC<IChildrenProps> = ({ children }) => {
    return <CardContainer>
        {children}
    </CardContainer>
}

export default Card;