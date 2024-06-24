import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Card from '../../components/Card';
import Icon from "../../components/Icon";
import Input from "../../components/Input";
import Main from '../../components/Main';
import TemperatureView from "../../components/TemperatureView";
import Text from '../../components/Text';
import View from '../../components/View';
import LanguageSwitcher from "../../components/languageSwitcher";
import LoadingOverlay from "../../components/loadingOverlay";
import useGeoLocation from "../../hooks/getGeoLocation";
import { useBackgroundImageContext } from "../../stores/HomeBackgroundProvider";
import { useLoadingContext } from "../../stores/LoadingProvider";
import { useLocationContext } from "../../stores/LocationProvider";
import { useWeatherForecastContext } from "../../stores/WeatherForecastProvider";

import './styles.css';

const Home: React.FC = () => {
    const { t } = useTranslation();

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
            <LanguageSwitcher />
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
                                day="today"
                                temperature={temperature}
                            />

                            <Text as="h1">
                                {weather ? t(weather.toLowerCase()) : '-'}
                            </Text>

                            <Text as="h3">
                                {t('wind')} : {windDirection ?? '-'} {windSpeed ?? '-'}km/h
                            </Text>
                            <Text as="h3">
                                {t('humidity')}: {humidity ?? '-'}%
                            </Text>
                            <Text as="h3">
                                {t('pressure')}: {pressure ?? '-'}hPA
                            </Text>

                        </View>
                    </View>
                    <View className="row secondary" colortheme={colorTheme}>
                        <View className="column primary">
                        </View>

                        <View className="column secondary">
                            <TemperatureView
                                day="tomorrow"
                                temperature={tomorowTemperature}
                            />
                        </View>
                    </View>
                    <View className="row tertiary" colortheme={colorTheme}>
                        <View className="column primary">
                        </View>

                        <View className="column secondary">
                            <TemperatureView
                                day="afterTomorrow"
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