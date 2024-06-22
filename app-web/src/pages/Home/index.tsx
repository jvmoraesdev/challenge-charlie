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
import Icon from "../../components/Icon";
import LoadingOverlay from "../../components/loadingOverlay";
import { useLoadingContext } from "../../stores/LoadingProvider";

const Home: React.FC = () => {
    const { backgroundImage } = useBackgroundImageContext();
    const { setLoading } = useLoadingContext();
    const { city, fetchLocation } = useLocationContext();
    const { latitude, longitude } = useGeoLocation();
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
        fetchWeatherForecast,
    } = useWeatherForecastContext();

    useEffect(() => {
        setLoading(false)
    }, [colorTheme])

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

    return (
        <>
            <LoadingOverlay />
            <Main
                backgroundimage={backgroundImage}
            >
                <Card>
                    <Input />
                    <View className="row primary" colortheme={colorTheme}>
                        <View className="column primary">
                            <Icon />
                        </View>
                        <View className="column secondary">
                            <TemperatureView
                                day="HOJE"
                                temperature={temperature}
                            />

                            <Text as="h1">
                                {weather ?? '-'}
                            </Text>

                            <Text as="h3">
                                Vento: {windDirection ?? '-'} {windSpeed ?? '-'}km/h
                            </Text>
                            <Text as="h3">
                                Humidade: {humidity ?? '-'}%
                            </Text>
                            <Text as="h3">
                                Pressão: {pressure ?? '-'}hPA
                            </Text>

                        </View>
                    </View>
                    <View className="row secondary" colortheme={colorTheme}>
                        <View className="column primary">
                        </View>

                        <View className="column secondary">
                            <TemperatureView
                                day="AMANHÃ"
                                temperature={tomorowTemperature}
                            />
                        </View>
                    </View>
                    <View className="row tertiary" colortheme={colorTheme}>
                        <View className="column primary">
                        </View>

                        <View className="column secondary">
                            <TemperatureView
                                day="DEPOIS DE AMANHÃ"
                                temperature={afterTomorrowTemperature}
                            />
                        </View>
                    </View>
                </Card>
            </Main>
        </>
    )

}

export default Home;