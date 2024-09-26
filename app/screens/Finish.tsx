import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import Header from "../components/Header";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useAppContext} from "../context/AppContext";
import {useAuth} from "../context/AuthContext";
import {useTheme} from "../context/ThemeContext";
import Stat from "../components/Stat";
import HomeIcon from "../components/HomeIcon";
import {useIsFocused} from "@react-navigation/native";

type Props = NativeStackScreenProps<any>;

const Finish = ({navigation}: Props) => {
    const {setWaitingTime, setProcessWaitingTime, setTravelledDistance, appState} = useAppContext();
    const {authState} = useAuth();
    const {theme, color} = useTheme();
    const isFocused = useIsFocused();
    const { appState: { isLandscape } } = useAppContext();

    useEffect(() => {

        return () => {
            setWaitingTime(0);
            setTravelledDistance(0);
            setProcessWaitingTime(0);
        }
    }, [isFocused]);


    const navigateToHomePage = () => {
        setWaitingTime(0);
        setTravelledDistance(0);
        setProcessWaitingTime(0);
        navigation.navigate("Home");
    }

    const getTotalMoneyForDistance = () => {
        return (+appState.travelledDistance.toFixed(2) * (authState?.data?.tariff?.price || 0)).toFixed(2);
    }

    const getTotalMoneyForWaiting = () => {
        let freeExpectationMinutes = (authState?.data?.waiting.expectation || 3);
        const moneyForExpectation = (authState?.data?.waiting.price_for_expectation || 200);

        let minutes = Math.floor(appState.waitingTime / 60) - freeExpectationMinutes;
        let processMinutes = Math.floor(appState.processWaitingTime / 60);

        if (minutes < 0) {
            minutes = 0;
        }

        return (minutes * moneyForExpectation) + (processMinutes * moneyForExpectation);
    }

    const getTotalMoney = () => {
        const totalMoneyForWaiting = getTotalMoneyForWaiting();
        const totalMoneyForDistance = getTotalMoneyForDistance();
        return +totalMoneyForDistance + totalMoneyForWaiting;
    }


    return (
        <SafeAreaView
            style={{
                flex: 1
            }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Header navigation={navigation}/>


                <View
                    style={{
                        flexDirection: isLandscape ? "row" : "column",
                        justifyContent: isLandscape ? "space-evenly" : undefined
                    }}
                >
                    <View
                        style={{
                            marginTop: isLandscape ? 22 : 52
                        }}
                    >
                        <Stat
                            label={"Общая пройденная дистанция"}
                            value={appState.travelledDistance.toFixed(2)}
                            measurementLabel={"км"}
                            isMain={true}
                        />
                    </View>
                    <View
                        style={{
                            marginTop: 22,
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 26
                        }}
                    >
                        <Stat
                            label={"За ожидание"}
                            value={getTotalMoneyForWaiting()}
                            measurementLabel={"сум"}
                        />
                        <Stat
                            label={"За проезд"}
                            value={getTotalMoneyForDistance()}
                            measurementLabel={"сум"}
                        />
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: color.headerBottomBackground,
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        borderRadius: 15,
                        marginHorizontal: 16,
                        marginTop: 30
                    }}
                >
                    <Text
                        style={{
                            fontSize: 22,
                            lineHeight: 24,
                            fontFamily: "DMSans_700Bold",
                            textAlign: "center",
                            color: theme === "light" ? "#000000" : "#E9D41D"
                        }}
                    >Итого на оплату</Text>
                    <View
                        style={{
                            paddingVertical: 12,
                            flexDirection: "row",
                            justifyContent: "center",
                            backgroundColor: theme === "light" ? "#ffffff" : "#171717",
                            borderRadius: 16,
                            marginTop: 10
                        }}
                    >
                        <Text
                            style={{
                                color: color.primaryText,
                                fontSize: 22,
                                lineHeight: 24,
                                fontFamily: "DMSans_700Bold",
                            }}
                        >
                            {getTotalMoney()}
                        </Text>
                        <Text
                            style={{
                                color: color.primaryText,
                                fontFamily: "DMSans_700Bold",
                                fontSize: 18,
                                marginLeft: 6,
                            }}
                        >
                            сум
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: theme === "light" ? "#ffffff" : "#333333",

                        shadowColor: "#006EE91A",
                        shadowOffset: {width: 0, height: -1},
                        shadowOpacity: 0.1,
                        shadowRadius: 20,

                        elevation: 3,

                        paddingVertical: 26,
                        alignItems: "center",
                        marginBottom: 25,
                        marginTop: "auto"
                    }}
                >
                    <HomeIcon
                        onPress={navigateToHomePage}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Finish;