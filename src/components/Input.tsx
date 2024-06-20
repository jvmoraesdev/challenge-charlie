import styled from 'styled-components'
import React from 'react'
import { COLORS } from '../assets/colors'
import { screenBreakpoints } from '../assets/screenBreakpoints'
import { IChildrenProps } from '../interfaces/childrenProps.interface'
import { ReactComponent as CompassIcon } from '../assets/icons/44.svg'

const InputContainer = styled.input`
    width: 100%;
    height: 100%;
    color: ${COLORS.gray};
    font-family: Roboto;
    font-size: 30px;
    font-weight: bold;
    border: none;

    &:focus{
        outline: none;
    }
`

const InputView = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    align-items: center;
    background-color: ${COLORS.white};
`

const StyledCompassIcon = styled(CompassIcon)`
    padding: 0.3rem;
    width: 70px;
    height: 70px;
    fill: ${COLORS.gray};
    margin-inline: 10px;
`

const Input: React.FC<IChildrenProps> = ({ children }) => {

    return (
        <InputView>
            <StyledCompassIcon />
            <InputContainer>{children}</InputContainer >
        </InputView>
    )
}

export default Input