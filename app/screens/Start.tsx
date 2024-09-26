import React, {useEffect, useRef, useState} from 'react';
import {AppState, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import * as Location from 'expo-location';
import Header from "../components/Header";
import CustomButton from "../../components/CustomButton/CustomButton";
import {useAuth} from "../context/AuthContext";
import {useAppContext} from "../context/AppContext";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useIsFocused} from "@react-navigation/native";
import Stat from "../components/Stat";
import ExchangeIcon from "../components/ExchangeIcon";
import {activateKeepAwakeAsync, deactivateKeepAwake} from "expo-keep-awake";

interface IPosition {
    latitude: number;
    longitude: number;
}

type Props = NativeStackScreenProps<any>;

const Start = ({navigation}: Props) => {
    const {setTravelledDistance, appState: {travelledDistance}} = useAppContext();
    const [distance, setDistance] = useState(travelledDistance);
    const lastPosition = useRef<IPosition | null>(null);
    const subscription = useRef<Location.LocationSubscription | null>(null);
    const {authState} = useAuth();
    const isFocused = useIsFocused();
    const { appState: { isLandscape } } = useAppContext();

    const activateKeepAwake = () => {
        activateKeepAwakeAsync()
            .then(() => {
                console.log("Activated keep awake");
            })
    }

    const deactivateKeepAwakeFn = () => {
        deactivateKeepAwake()
            .then(r => {
                console.log("Deactivated keep awake");
            })
    }

    const startTracking = async () => {
        const {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access location was denied');
            return;
        }

        subscription.current = await Location.watchPositionAsync({
            accuracy: Location.Accuracy.BestForNavigation,
            distanceInterval: 5,
            timeInterval: 1000,
        }, (position) => {
            const {latitude, longitude} = position.coords;
            const currentPos = {latitude, longitude};
            if (lastPosition.current) {
                const dist = calculateDistance(lastPosition.current, currentPos) / 1000;
                setDistance(prevDistance => prevDistance + dist);
            }
            lastPosition.current = currentPos;
        });
    };


    const calculateDistance = (pos1: IPosition, pos2: IPosition) => {
        const earthRadius = 6371e3; // meters
        const lat1 = pos1.latitude * Math.PI / 180;
        const lat2 = pos2.latitude * Math.PI / 180;
        const deltaLat = (pos2.latitude - pos1.latitude) * Math.PI / 180;
        const deltaLon = (pos2.longitude - pos1.longitude) * Math.PI / 180;

        const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return earthRadius * c; // returns in meters
    };

    const stopTracking = () => {
        setTravelledDistance(distance);
        if (subscription.current) {
            subscription.current.remove();
        }
        deactivateKeepAwakeFn();
        lastPosition.current = null;
    };

    const handleClickFinish = () => {
        stopTracking();
        navigation.navigate("Finish");
    }

    const handleWaitButton = () => {
        stopTracking();
        navigation.navigate("Wait", {
            isStartPage: true,
        });
    }

    useEffect(() => {
        if (isFocused) {
            startTracking();
            activateKeepAwake();
        } else {
            stopTracking();
        }
        return () => {
            deactivateKeepAwakeFn();
        }
    }, [isFocused]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{
                flexGrow: 1
            }}>
                <Header navigation={navigation}/>

                <View
                    style={{
                        marginTop: 52,
                        flexDirection: isLandscape ? "row" : "column",
                        alignItems: isLandscape ? "center" : undefined,
                        paddingHorizontal: isLandscape ? 50 : 0
                    }}
                >
                    <Stat
                        label={"Пройденная дистанция"}
                        value={distance.toFixed(2)}
                        measurementLabel={"км"}
                    />
                    <View
                        style={{
                            marginVertical: 10,
                            marginHorizontal: "auto",
                            transform: [{ rotate: isLandscape ? '90deg' : "0deg" }],
                        }}
                    >
                        <ExchangeIcon/>
                    </View>
                    <Stat
                        label={"Сумма за проезд"}
                        value={(+distance.toFixed(2) * (authState?.data?.tariff?.price || 0)).toFixed(2)}
                        measurementLabel={"сум"}
                    />
                </View>

                <View
                    style={{
                        ...styles.finishButton,
                        flexDirection: isLandscape ? "row" : "column",
                        justifyContent: isLandscape ? "space-between" : undefined
                    }}
                >
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <CustomButton
                            title="Начать ожидание"
                            type="primary"
                            onPress={handleWaitButton}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <CustomButton
                            title="Финиш"
                            type="danger"
                            onPress={handleClickFinish}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    finishButton: {
        marginTop: "auto"
    },
});

export default Start;