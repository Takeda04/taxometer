import React, {useState} from 'react';
import {SafeAreaView, TextInput, View, StyleSheet, Text, Image, ScrollView} from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import {useAuth} from "../context/AuthContext";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import Logo from "../components/Logo";

type Props = NativeStackScreenProps<any>;

const Login = ({navigation}: Props) => {
    const [key, setKey] = useState<string>("");
    const {onLogin} = useAuth();
    const [loading, setLoading] = useState(false);

    const handleChange = (text: string) => {
        setKey(text);
    }

    const login = async () => {
        setLoading(true);
        if (!key.trim()) {
            return alert("Please enter a key");
        }
        const result = await onLogin!(key);
        if (result && result.error) {
            alert(result.message);
            setKey("");
        } else {
            navigation.navigate("Home");
        }
        setLoading(false);
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.logo}>
                    <Logo/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Key</Text>
                    <TextInput
                        onChangeText={handleChange}
                        value={key}
                        style={styles.input}
                    />
                </View>
                <CustomButton
                    onPress={login}
                    title="Log in"
                    disabled={loading}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: "center",
    },
    logoImg: {
        width: "100%",
        height: "100%",
    },
    label: {
        fontSize: 18,
        fontFamily: "Poppins_600SemiBold"
    },
    inputContainer: {
        marginTop: 30,
        padding: 10,
    },
    input: {
        height: 40,
        marginTop: 6,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontFamily: "Poppins_600SemiBold"
    }
})

export default Login;