import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./app/screens/Login";
import {AuthProvider, useAuth} from "./app/context/AuthContext";
import Home from "./app/screens/Home";
import * as SplashScreen from "expo-splash-screen";
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins'
import {
    DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';
import {useCallback, useEffect} from "react";
import {SafeAreaView, StatusBar} from "react-native";
import Start from "./app/screens/Start";
import {AppProvider} from "./app/context/AppContext";
import Finish from "./app/screens/Finish";
import Wait from "./app/screens/Wait";
import {ThemeProvider, useTheme} from "./app/context/ThemeContext";
import { useKeepAwake } from 'expo-keep-awake';
import Balance from "./app/screens/Balance";

export default function App() {
    let [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_800ExtraBold,

        DMSans_700Bold
    });
    useKeepAwake();
    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
                console.log("Splash screen is ready to be hidden.");
            } catch (error) {
                console.error("Error preventing auto hide splash screen:", error);
            }
        }

        prepare();
    }, []);

    useEffect(() => {
        async function hideSplash() {
            if (fontsLoaded) {
                try {
                    await SplashScreen.hideAsync();
                    console.log("Splash screen hidden.");
                } catch (error) {
                    console.error("Error hiding splash screen:", error);
                }
            }
        }

        hideSplash();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        console.log("Fonts are not loaded yet.");
        return null;
    }

    return (
        <ThemeProvider>
            <AuthProvider>
                <AppProvider>
                    <Layout/>
                </AppProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

const Stack = createNativeStackNavigator();

export const Layout = () => {
    const {authState,} = useAuth();
    const { color } = useTheme();

    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor="#f1c232"
            />
            <Stack.Navigator
                screenOptions={{
                    contentStyle: {
                        backgroundColor: color.background,
                    }
                }}
            >
                {authState?.authenticated ? (
                    <>
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{
                                headerShown: false,
                                headerBackVisible: false,
                                gestureEnabled: false,
                            }}
                        />
                        <Stack.Screen
                            name="Start"
                            component={Start}
                            options={{
                                headerShown: false,
                                headerBackVisible: false,
                                gestureEnabled: false
                            }}
                        />
                        <Stack.Screen
                            name="Finish"
                            component={Finish}
                            options={{
                                headerShown: false,
                                headerBackVisible: false,
                                gestureEnabled: false
                            }}
                        />
                        <Stack.Screen
                            name="Wait"
                            component={Wait}
                            options={{
                                headerShown: false,
                                headerBackVisible: false,
                                gestureEnabled: false
                            }}
                        />
                        <Stack.Screen
                            name="Balance"
                            component={Balance}
                            options={{
                                headerShown: false,
                                headerBackVisible: false,
                                gestureEnabled: false
                            }}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}