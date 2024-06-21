import React, { createContext, useContext, useState } from 'react';
import locationApi from '../api/locationApi';
import { IChildrenProps } from '../interfaces/childrenProps.interface';
import { ILocationContextType } from '../interfaces/context.interface';
import { ColorTheme } from '../interfaces/types';


const LocationContext = createContext<ILocationContextType | undefined>(undefined);

export const useLocationContext = () => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error('useLocationContext is required');
    }
    return context;
};

export const LocationProvider: React.FC<IChildrenProps> = ({ children }) => {

    const [city, setCity] = useState<string>('');

    const fetchLocation = async (latitude: string, longitude: string) => {
        await locationApi.getLocation(latitude, longitude)
            .then((data: any) => {
                if (!data || !data.success) {
                    console.error('No location data received from server');
                    return;
                }
                console.log(data)
                const location: string = data.data;
                setCity(location)
            })
            .catch((error: Error) => {
                console.error('Error getting location:', error);
            });
    };



    const contextValue: ILocationContextType = {
        city,
        fetchLocation
    };

    return (
        <LocationContext.Provider value={contextValue}>
            {children}
        </LocationContext.Provider>
    );
};
