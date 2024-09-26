import React from 'react';
import {Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import {useAuth} from "../context/AuthContext";
import CustomButton from "../../components/CustomButton/CustomButton";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import Header from "../components/Header";
import {useTheme} from "../context/ThemeContext";
import Logo from "../components/Logo";
import {useAppContext} from "../context/AppContext";

type Props = NativeStackScreenProps<any>;

const Home = ({navigation}: Props) => {
    const {authState} = useAuth();
    const {color} = useTheme();
    const { appState: { isLandscape } } = useAppContext();

    const navigateToStartPage = () => {
        navigation.navigate("Start");
    }

    const navigateToWaitPage = () => {
        navigation.navigate("Wait");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{
                flexGrow: 1
            }}>
                <Header navigation={navigation}/>

                <View style={{
                    marginTop: isLandscape ? 10 : 39,
                    flexDirection: isLandscape ? "row" : "column",
                    alignItems: isLandscape ? "center" : undefined
                }}>
                    <View
                        style={{
                            marginHorizontal: "auto",
                        }}
                    >
                        <Logo/>
                    </View>
                    <Text
                        style={{
                            fontSize: 24,
                            lineHeight: 26.4,
                            fontFamily: "DMSans_700Bold",
                            textAlign: "center",
                            maxWidth: 282,
                            marginTop: 11,
                            marginHorizontal: "auto",
                            color: color.primaryText,
                        }}
                    >
                        Комфортные поездки,
                        каждый день!
                    </Text>
                </View>

                <View style={{
                    ...styles.bottomButtons,
                    flexDirection: isLandscape ? "row" : "column",
                    justifyContent: isLandscape ? "space-between" : undefined
                }}>
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <CustomButton
                            title="Поехали"
                            type="primary"
                            onPress={navigateToStartPage}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <CustomButton
                            title="Начать ожидание"
                            type="danger"
                            onPress={navigateToWaitPage}
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
    bottomButtons: {
        marginTop: "auto",
    }
});

export default Home;