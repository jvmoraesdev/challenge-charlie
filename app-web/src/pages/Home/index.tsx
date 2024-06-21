import React, { useEffect, useState } from "react";
import './styles.css';
import config from '../../config/config'
import Card from '../../components/Card'
import Main from '../../components/Main'
import View from '../../components/View';
import Text from '../../components/Text';
import Input from "../../components/Input";
import { ColorTheme, TemperaturaScale, WindDirection } from "../../interfaces/types";
import TemperatureView from "../../components/TemperatureView";
import { useBackgroundImageContext } from "../../stores/HomeBackgroundProvider";
import useGeoLocation from "../../hooks/getGeoLocation";
import { useWeatherForecastContext } from "../../stores/WeatherForecastProvider";
import { useLocationContext } from "../../stores/LocationProvider";

const Home: React.FC = () => {
    const { backgroundImage } = useBackgroundImageContext();
    const { city, fetchLocation } = useLocationContext();
    const {
        temperature,
        weather,
        humidity,
        pressure,
        windSpeed,
        windDirection,
        tomorowTemperature,
        afterTomorrowTemperature,
        colorTheme,
        fetchWeatherForecast
    } = useWeatherForecastContext();


    const { latitude, longitude } = useGeoLocation();

    useEffect(() => {
        console.log(colorTheme);
        setLoadOverlay(false)
    }, [colorTheme])

    const [loadOverlay, setLoadOverlay] = useState<boolean>(true);
    const [temperatureScale, setTemperatureScale] = useState<TemperaturaScale>('celsius');

    useEffect(() => {
        if (latitude && longitude) {
            fetchLocation(latitude, longitude)
        }
    }, [latitude, longitude])

    useEffect(() => {
        if (city) {
            fetchWeatherForecast(city)
        }
    }, [city])


    const handleTemperatureScaleChange = () => {
        //Change the current temperature scale from celsious to fahrenheit and vice versa
        setTemperatureScale(temperatureScale === 'celsius' ? 'fahrenheit' : 'celsius')
    }

    return (
        <Main
            backgroundImage={backgroundImage}

        >
            {loadOverlay ?
                (
                    <Card></Card>
                )
                :
                (
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
                                    {weather ?? '-'}
                                </Text>

                                <Text as="h3">
                                    Vento: {windDirection ?? '-'} {windSpeed ?? '-'}
                                </Text>
                                <Text as="h3">
                                    Humidade: {humidity ?? '-'}%
                                </Text>
                                <Text as="h3">
                                    Pressão: {pressure ?? '-'}hPA
                                </Text>

                            </View>
                        </View>
                        <View className="row secondary" colorTheme={colorTheme}>
                            <View className="column primary">
                            </View>

                            <View className="column secondary">
                                <TemperatureView
                                    day="AMANHÃ"
                                    temperature={tomorowTemperature}
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
                                    temperature={afterTomorrowTemperature}
                                    temperatureScale={temperatureScale}
                                />
                            </View>
                        </View>
                    </Card>
                )
            }
        </Main>
    )

}

export default Home;