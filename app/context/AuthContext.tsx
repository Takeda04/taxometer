import * as SecureStore from "expo-secure-store";
import {createContext, useContext, useEffect, useState} from "react";
import axios, {AxiosError} from "axios";


interface User {
    driver_id: number;
    driver_name: string;
    tariff: {
        name: string;
        price: number;
    },
    waiting: {
        expectation: number;
        price_for_expectation: number;
    }
}

interface AuthProps {
    authState?: { data: User | null; authenticated: boolean | null };
    onLogin?: ( key: string ) => Promise<any>;
}


const USER_KEY = "userKey";
export const API_URL = "https://uzbolt.uz/api";
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<{
        data: User | null;
        authenticated: boolean | null;
    }>({
        data: null,
        authenticated: null,
    });
    const [loading, setLoading] = useState<boolean>(true);

    const initialState = async () => {
        try {
            const key = await SecureStore.getItemAsync(USER_KEY);
            if(!key) {
                return;
            }
            const { data } = await axios.get(`${API_URL}/driver/${key}`);
            if(data.data.driver_status !== "active") {
                await SecureStore.deleteItemAsync(USER_KEY);
                setAuthState({
                    data: null,
                    authenticated: false,
                });
                setLoading(false);
                return;
            }
            setAuthState({
                data: data.data,
                authenticated: true,
            });
            setLoading(false);
        } catch (e) {
            await SecureStore.deleteItemAsync(USER_KEY);
        }
    }

    useEffect(() => {
        initialState();
    }, []);


    const login = async (key: string) => {
        try {
            const { data } = await axios.get(`${API_URL}/driver/${key}`);
            console.log(data)
            setAuthState({
                data: data.data,
                authenticated: true,
            });
            if(data.data.driver_status !== "active") {
                await SecureStore.deleteItemAsync(USER_KEY);
                setAuthState({
                    data: null,
                    authenticated: false,
                });
                setLoading(false);
                return { error: true, message: "This driver has status inactive" };
            }
            await SecureStore.setItemAsync(USER_KEY, key);
            return data;
        } catch (error) {
            await SecureStore.deleteItemAsync(USER_KEY);
            setAuthState({
                data: null,
                authenticated: false,
            });
            if(error instanceof AxiosError) {
                return { error: true, message: error.response?.data.message || error.message };
            }
            // @ts-ignore
            return { error: true, message: JSON.stringify(error) };
        }
    }

    const value = {
        onLogin: login,
        authState
    };


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}