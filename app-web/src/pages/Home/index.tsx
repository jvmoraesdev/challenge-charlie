import React, { useEffect, useState } from "react";
import './styles.css';
import config from '../../config/config'
import Card from '../../components/Card'
import Main from '../../components/Main'
import View from '../../components/View';
import Text from '../../components/Text';
import Input from "../../components/Input";
import { ColorTheme, TemperaturaScale, WindDirection } from "../../interfaces/types";
import { ITemperature } from "../../interfaces/api.interface";
import TemperatureView from "../../components/TemperatureView";
import { useBackgroundImageContext } from "../../stores/HomeBackgroundProvider";

const Home: React.FC = () => {
    const { backgroundImage } = useBackgroundImageContext();

    const colorTheme: ColorTheme = 'gray'
    const [temperatureScale, setTemperatureScale] = useState<TemperaturaScale>('celsius')
    const temperature: ITemperature = {
        celsius: 27,
        fahrenheit: 80
    }
    const windDirection: WindDirection = 'SO'
    const windSpeed: number = 6.4
    const humidity: number = 78
    const pressure: number = 1003

    const handleTemperatureScaleChange = () => {
        temperatureScale == 'celsius'
            ? setTemperatureScale('fahrenheit')
            : setTemperatureScale('celsius')
    }

    return (
        <Main
            backgroundImage={backgroundImage}

        >
            <Card>
                <Input />
                <View className="row primary" colorTheme={colorTheme}>
                    <View className="column primary">
                    </View>
                    <View className="column secondary">
                        <TemperatureView
                            day="HOJE"
                            temperature={temperature}
                            temperatureScale={temperatureScale}
                        />

                        <Text as="h1">
                            Ensolarado
                        </Text>

                        <Text as="h3">
                            Vento: {windDirection} {windSpeed}
                        </Text>
                        <Text as="h3">
                            Humidade: {humidity}%
                        </Text>
                        <Text as="h3">
                            Pressão: {pressure}hPA
                        </Text>

                    </View>
                </View>
                <View className="row secondary" colorTheme={colorTheme}>
                    <View className="column primary">
                    </View>

                    <View className="column secondary">
                        <TemperatureView
                            day="AMANHÃ"
                            temperature={temperature}
                            temperatureScale={temperatureScale}
                        />
                    </View>
                </View>
                <View className="row tertiary" colorTheme={colorTheme}>
                    <View className="column primary">
                    </View>

                    <View className="column secondary">
                        <TemperatureView
                            day="DEPOIS DE AMANHÃ"
                            temperature={temperature}
                            temperatureScale={temperatureScale}
                        />
                    </View>
                </View>
            </Card>
        </Main>
    )

}

export default Home;