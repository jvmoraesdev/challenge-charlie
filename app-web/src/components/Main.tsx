import styled from 'styled-components'
import React from 'react'
import { IMainProps } from '../interfaces/main.interface'
import { COLORS } from '../assets/colors'
import { screenBreakpoints } from '../assets/screenBreakpoints'

const MainContainer = styled.div<IMainProps>`
    width: 100vw;
    height: 100vh;

    /* a background is displayed as a fixed gradient if no image is found */
    background: linear-gradient(${COLORS.mainGradientTop}, ${COLORS.mainGradientBottom});
    ${props => props.backgroundImage && `
        background-image: url(${props.backgroundImage});
        background-size: cover;
        background-position: center;
    `}

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${screenBreakpoints.tabletsMD}){
        display: block;
    }
`

const Main: React.FC<IMainProps> = ({ children, backgroundImage }) => {
    return <MainContainer
        backgroundImage={backgroundImage}
    >
        {children}
    </MainContainer>
}

export default Main;