import React, { createContext, useContext, useEffect, useState } from 'react';
import { IChildrenProps } from '../interfaces/childrenProps.interface';
import { ILoadingContextType } from '../interfaces/context.interface';


const LoadingContext = createContext<ILoadingContextType | undefined>(undefined);

export const useLoadingContext = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoadingContext is required');
    }
    return context;
};

export const LoadingProvider: React.FC<IChildrenProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
    }, []);

    const contextValue: ILoadingContextType = {
        loading,
        setLoading
    };

    return (
        <LoadingContext.Provider value={contextValue}>
            {children}
        </LoadingContext.Provider>
    );
};
