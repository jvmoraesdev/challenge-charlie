import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../utils/colors';
import { ITextProps } from '../interfaces/text.interface';

const baseTextStyle = css`
    height: auto;
    color: ${COLORS.white};
    font-family: 'Roboto', 'Helvetica Neue', Sans-Serif;
    font-style: unset;
    font-weight: unset;
    padding: 0;
    margin: 0;
`

const StyledH1 = styled.h1`
    ${baseTextStyle}
    font-size: 28px;
    padding-top: 10px;
    padding-bottom: 20px;
    font-weight: lighter;
`

const StyledH2 = styled.h2`
    ${baseTextStyle}
    font-size: 20px;
    font-weight: lighter;
`

const StyledH3 = styled.h3`
    ${baseTextStyle}
    font-size: 18px;
`

const Text: React.FC<ITextProps> = ({ children, className, as }) => {
    switch (as) {
        case 'h1':
            return (<StyledH1>{children}</StyledH1>)
        case 'h2':
            return (<StyledH2>{children}</StyledH2>)
        case 'h3':
            return (<StyledH3>{children}</StyledH3>)
        default:
            return (<StyledH3>{children}</StyledH3>)
    }
}

export default Text;