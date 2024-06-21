import React from 'react'
import { ITemperatureViewProps } from '../interfaces/temperatureView.interface'
import Text from './Text'
import View from './View'
import styled from 'styled-components'

const StyledView = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 80px;
    justify-content: space-evenly;
    padding-top: 10px;
`

const TemperatureView: React.FC<ITemperatureViewProps> = ({ day, temperature, temperatureScale }) => {
    return (
        <StyledView>
            <Text as="h2" >
                {day}
            </Text>
            <Text as="h2">
                {temperature ? temperature[temperatureScale] : '-'} º{temperatureScale === 'celsius' ? 'C' : 'F'}
            </Text>
        </StyledView>
    )
}

export default TemperatureView;

