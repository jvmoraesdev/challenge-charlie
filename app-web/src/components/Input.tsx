import styled, { css } from 'styled-components'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../utils/colors'
import { IChildrenProps } from '../interfaces/childrenProps.interface'
import { ReactComponent as CompassIcon } from '../assets/icons/compass.svg'
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg'
import { useWeatherForecastContext } from '../stores/WeatherForecastProvider'
import { useLocationContext } from '../stores/LocationProvider'

const InputContainer = styled.input`
    width: 100%;
    height: fit-content;
    color: ${COLORS.gray};
    font-family: Roboto;
    font-size: 30px;
    font-weight: bold;
    border: none;

    &:focus{
        outline: none;
        border: none
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
const StyledIcon = css`
    padding: 0.3rem;
    width: 70px;
    height: 70px;
    fill: ${COLORS.gray};
    margin-inline: 10px;

`

const StyledCompassIcon = styled(CompassIcon)`
    ${StyledIcon}
`

const StyledSearchIcon = styled(SearchIcon)`
    ${StyledIcon}
    cursor: pointer;
`


const Input: React.FC = () => {
    const { city } = useLocationContext()
    const { fetchWeatherForecast } = useWeatherForecastContext();

    const [inputText, setInputText] = useState<string>('')

    useEffect(() => {
        if (city) {
            setInputText(city)
        }
    }, [city])

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            fetchWeatherForecast(inputText);
        }
    };


    return (
        <InputView >
            <StyledCompassIcon />
            <InputContainer
                type='text'
                value={inputText}
                onChange={(e) => {
                    setInputText(e.target.value)
                }}
                onKeyDown={handleKeyPress}
            />
            <StyledSearchIcon onClick={() => fetchWeatherForecast(inputText)} />
        </InputView>
    )
}

export default Input