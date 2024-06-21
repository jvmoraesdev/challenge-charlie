import React, { createContext, useContext, useEffect, useState } from 'react';
import backgroundApi from '../api/backgroundApi';
import { IBackgroundImageContextType } from '../interfaces/context.interface';
import config from '../config/config';
import { IChildrenProps } from '../interfaces/childrenProps.interface';


const BackgroundImageContext = createContext<IBackgroundImageContextType | undefined>(undefined);

export const useBackgroundImageContext = () => {
    const context = useContext(BackgroundImageContext);
    if (!context) {
        throw new Error('useBackgroundImageContext is required');
    }
    return context;
};

export const BackgroundImageProvider: React.FC<IChildrenProps> = ({ children }) => {
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    useEffect(() => {
        fetchBackgroundImage();
    }, []);

    const fetchBackgroundImage = () => {
        backgroundApi.getBackgroundImage()
            .then((data: any) => {
                if (!data || !data.success) {
                    console.error('No image data received from server');
                    return;
                }

                const imageUrl = data.data.imageUrl;
                setBackgroundImage(imageUrl);
            })
            .catch((error: Error) => {
                console.error('Error getting background image:', error);
            });
    };

    const contextValue: IBackgroundImageContextType = {
        backgroundImage,
        fetchBackgroundImage
    };

    return (
        <BackgroundImageContext.Provider value={contextValue}>
            {children}
        </BackgroundImageContext.Provider>
    );
};
