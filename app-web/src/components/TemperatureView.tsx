import React from 'react'
import { ITemperatureViewProps } from '../interfaces/temperatureView.interface'
import Text from './Text'
import View from './View'
import styled from 'styled-components'
import { useWeatherForecastContext } from '../stores/WeatherForecastProvider'
import { screenBreakpoints } from '../utils/screenBreakpoints'
import { useTranslation } from "react-i18next";

const StyledView = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 80px;
    justify-content: space-evenly;
    padding-top: 10px;

    @media screen and (max-width: ${screenBreakpoints.laptopsLG}){
        padding-top: 0px;
        height: 60px;
    }
`

const TemperatureView: React.FC<ITemperatureViewProps> = ({ day, temperature }) => {
    const { t } = useTranslation();

    const { currentTemperatureScale, setCurrentTemperatureScale } = useWeatherForecastContext();


    const handleChangeTemperatureScale = () => {
        //Change the current temperature scale from celsious to fahrenheit and vice versa
        setCurrentTemperatureScale(currentTemperatureScale === 'celsius' ? 'fahrenheit' : 'celsius')
    }

    return (
        <StyledView>
            <Text as="h2">
                {t(day).toUpperCase()}
            </Text>
            <Text as="h2"
                onClick={handleChangeTemperatureScale}
            >
                {temperature ? temperature[currentTemperatureScale] : '-'} º{currentTemperatureScale === 'celsius' ? 'C' : 'F'}
            </Text>
        </StyledView>
    )
}

export default TemperatureView;

