import React, {FC} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useAppContext} from "../context/AppContext";
import {useTheme} from "../context/ThemeContext";

type Props = NativeStackScreenProps<any>;
interface ISideMenu {
    navigation: Props["navigation"],
    closeMenu: any
}
const SideMenu: FC<ISideMenu> = ({ navigation, closeMenu }) => {
    const { color } = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color.background,
            padding: 16,
        },
        menuItem: {
            fontSize: 16,
            marginBottom: 16,
            color: color.primaryText
        },
    });
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.navigate('Wait'); closeMenu(); }}>
                <Text style={styles.menuItem}>Wait</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SideMenu;
