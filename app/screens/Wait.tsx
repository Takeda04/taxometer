import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text, ScrollView} from "react-native";
import Header from "../components/Header";
import CustomButton from "../../components/CustomButton/CustomButton";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useAppContext} from "../context/AppContext";
import {useAuth} from "../context/AuthContext";
import {useIsFocused} from "@react-navigation/native";
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {useTheme} from "../context/ThemeContext";
import Stat from "../components/Stat";
import {activateKeepAwakeAsync, deactivateKeepAwake} from "expo-keep-awake";
import BackgroundTimer from 'react-native-background-timer';



type Props = NativeStackScreenProps<any>;

const Wait = ({navigation, route}: Props) => {
    const {setWaitingTime, setProcessWaitingTime, appState} = useAppContext();
    const {isStartPage} = (route.params as { isStartPage: boolean }) || {isStartPage: false};
    const {authState} = useAuth();
    const [timer, setTimer] = useState(0);
    const interval = useRef<number | null>(null);
    const {color, theme} = useTheme();
    const isFocused = useIsFocused();
    const { appState: { isLandscape } } = useAppContext();

    const activateKeepAwake = () => {
        activateKeepAwakeAsync()
            .then(() => {
                console.log("Activated keep awake");
            })
    }

    const deactivateKeepAwakeFn = () => {
        deactivateKeepAwake().then(r => {
            console.log("Deactivated keep awake");
        })
    }


    useEffect(() => {
        activateKeepAwake();
        setTimer(isStartPage ? appState.processWaitingTime : appState.waitingTime);
        if (!interval.current) {
            interval.current = BackgroundTimer.setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 100);
        }
        if (!isFocused) {
            if (interval.current) {
                BackgroundTimer.clearInterval(interval.current);
                interval.current = null;
            }
        }
        return () => {
            if (interval.current) {
                BackgroundTimer.clearInterval(interval.current);
                interval.current = null;
            }
            deactivateKeepAwake();
        };
    }, [
        isFocused
    ]);


    const countMoneyForExpectation = () => {
        let freeExpectationMinutes = (authState?.data?.waiting.expectation || 3);
        const moneyForExpectation = (authState?.data?.waiting.price_for_expectation || 200);
        const minutes = isStartPage ? Math.floor(timer / 60) : Math.floor(timer / 60) - freeExpectationMinutes;
        if (minutes > 0) {
            return minutes * moneyForExpectation;
        }
        return 0;
    }


    const handleFinishButton = () => {
        if (interval.current) {
            BackgroundTimer.clearInterval(interval.current);
            interval.current = null;
        }
        if(isStartPage) {
            setProcessWaitingTime(timer);
        } else {
            setWaitingTime(timer);
        }
        deactivateKeepAwakeFn();
        navigation.navigate("Finish");
    }

    const getTime = () => {
        let freeExpectationMinutes = (authState?.data?.waiting.expectation || 3) * 60;
        let time = isStartPage ? timer : timer - freeExpectationMinutes;

        return `${Math.abs(time < 0 
            ? Math.floor(time / 60) + 1 
            : Math.floor(time / 60))}:${Math.abs(time % 60).toString().padStart(2, '0')}`;
    }

    const handleContinueButton = () => {
        if (interval.current) {
            BackgroundTimer.clearInterval(interval.current);
            interval.current = null;
        }
        if(isStartPage) {
            setProcessWaitingTime(timer);
        } else {
            setWaitingTime(timer);
        }
        deactivateKeepAwakeFn();
        navigation.navigate("Start");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{
                flexGrow: 1
            }}>
                <Header navigation={navigation}/>

                <View
                    style={{
                        flexDirection: isLandscape ? "row" : "column",
                        alignItems: isLandscape ? "center" : undefined,
                    }}
                >
                    <View
                        style={{
                            marginHorizontal: "auto",
                            marginTop: isLandscape ? 20 : 43,
                            flex: 1,
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    fontSize: 22,
                                    lineHeight: 24,
                                    fontFamily: "DMSans_700Bold",
                                    color: color.primaryText,
                                    textAlign: "center"
                                }}
                            >Время ожидания</Text>
                            <AnimatedCircularProgress
                                size={114}
                                width={2}
                                fill={Math.abs((timer % 60) / 0.6)}
                                tintColor="#FFA500"
                                backgroundColor={theme === "light" ? "#ffffff" : "#393939"}
                                rotation={0}
                                style={{
                                    marginHorizontal: "auto",
                                    marginTop: 7
                                }}
                            >
                                {() => (
                                    <View
                                        style={{
                                            backgroundColor: "#FFECB6",
                                            width: 92,
                                            height: 92,
                                            borderRadius: 46,
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 30,
                                                lineHeight: 49,
                                                fontFamily: "DMSans_700Bold",
                                            }}
                                        >
                                            {getTime()}
                                        </Text>
                                    </View>
                                )}
                            </AnimatedCircularProgress>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <Stat
                            label={"За ожидание"}
                            value={countMoneyForExpectation()}
                            measurementLabel={"сум"}
                            style={{
                                marginTop: 15
                            }}
                        />
                    </View>
                </View>

                <View
                    style={{
                        ...styles.buttonContainer,
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
                            title="Поехали"
                            type="primary"
                            onPress={handleContinueButton}
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
                            onPress={handleFinishButton}
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
    buttonContainer: {
        marginTop: "auto"
    },
    travelledDistanceContainer: {
        marginTop: 50,
        width: "100%",
        alignItems: "center",
    },
    travelledDistanceLabel: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 18
    },
    travelledDistanceContent: {
        borderColor: "#cccccc",
        borderWidth: 2,
        padding: 18,
        marginTop: 10,
        flexDirection: "row"
    },
    travelledDistanceText: {
        fontFamily: "OpenSans_800ExtraBold",
        fontSize: 34,
    },
    travelledDistanceSpan: {
        fontFamily: "OpenSans_500Medium",
        fontSize: 18,
        marginLeft: 10,
        marginTop: "auto",
    }
});

export default Wait;