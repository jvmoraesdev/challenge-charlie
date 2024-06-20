import React, { createContext, useContext, useEffect, useState } from 'react';
import BingApi from '../api/bingApi';
import { BingImageContextType } from '../interfaces/context.interface';
import config from '../config/config';
import { IChildrenProps } from '../interfaces/childrenProps.interface';




const BingImageContext = createContext<BingImageContextType | undefined>(undefined);

export const useBingImageContext = () => {
    const context = useContext(BingImageContext);
    if (!context) {
        throw new Error('useBingImageContext is required');
    }
    return context;
};

export const BingImageProvider: React.FC<IChildrenProps> = ({ children }) => {
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    useEffect(() => {
        fetchBackgroundImage();
    }, []);

    const fetchBackgroundImage = () => {
        BingApi.getBackgroundImage()
            .then((data: any) => {
                if (!data || !data.images || data.images.length <= 0) {
                    console.error('No image data received from Bing API');
                    return;
                }

                const bingImage = config.BING_API + data.images[0].url
                setBackgroundImage(bingImage);
            })
            .catch((error: Error) => {
                console.error('Error fetching Bing image:', error);
            });
    };

    const contextValue: BingImageContextType = {
        backgroundImage,
        fetchBackgroundImage
    };

    return (
        <BingImageContext.Provider value={contextValue}>
            {children}
        </BingImageContext.Provider>
    );
};
