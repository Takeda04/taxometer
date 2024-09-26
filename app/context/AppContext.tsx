import {createContext, useContext, useEffect, useState} from "react";
import {useWindowDimensions} from "react-native";

interface AppStateProps {
    travelledDistance: number;
    waitingTime: number;
    processWaitingTime: number;
    isLandscape: boolean;
}

interface AppProps {
    setTravelledDistance: (distance: number) => void;
    setWaitingTime: (time: number) => void;
    setProcessWaitingTime: (time: number) => void;
    appState: AppStateProps
}

const AppContext = createContext<AppProps>({
    appState: {
        travelledDistance: 0,
        waitingTime: 0,
        isLandscape: false,
        processWaitingTime: 0,
    },
    setTravelledDistance: (distance: number) => undefined,
    setWaitingTime: (time: number) => undefined,
    setProcessWaitingTime: (time: number) => undefined,
});

export const useAppContext = () => {
    return useContext(AppContext);
}

export const AppProvider = ({ children }: any) => {
    const {width, height} = useWindowDimensions();
    const isLandscape = width > height;
    const [appState, setAppState] = useState<AppStateProps>({
        travelledDistance: 0,
        waitingTime: 0,
        isLandscape: isLandscape,
        processWaitingTime: 0
    });

    useEffect(() => {
        setAppState((prev) => ({
            ...prev,
            isLandscape: isLandscape
        }))
    }, [isLandscape]);

    const setTravelledDistance = (distance: number) => {
        setAppState((prev) => ({
            ...prev,
            travelledDistance: distance
        }))
    }

    const setWaitingTime = (time: number) => {
        setAppState((prev) => ({
            ...prev,
            waitingTime: time
        }))
    }

    const setProcessWaitingTime = (time: number) => {
        setAppState((prev) => ({
            ...prev,
            processWaitingTime: time
        }));
    }

    const value = {
        appState,
        setTravelledDistance,
        setWaitingTime,
        setProcessWaitingTime,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}