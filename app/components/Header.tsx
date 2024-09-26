import React, {FC, useRef, useState} from 'react';
import {
    Image,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    Animated,
    View,
    Dimensions,
    PanResponder
} from "react-native";
import {useAuth} from "../context/AuthContext";
import {useTheme} from "../context/ThemeContext";
import {SvgXml} from "react-native-svg";
import {xmlCircle} from "./Circle";
import {useAppContext} from "../context/AppContext";
import SideMenu from "./SideMenu";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<any>;
interface IHeaderProps {
    navigation: Props["navigation"]
}
const Header: FC<IHeaderProps> = ({ navigation }) => {
    const {authState} = useAuth();
    const {theme, toggleTheme, color} = useTheme();
    const { appState: { isLandscape } } = useAppContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { width } = Dimensions.get('window');
    const slideAnim = useRef(new Animated.Value(width)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return gestureState.dx > 20; // Определение жеста свайпа вправо
            },
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dx > 0) {
                    slideAnim.setValue(gestureState.dx);
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx > 100) {
                    closeMenu();
                } else {
                    Animated.spring(slideAnim, {
                        toValue: 0,
                        useNativeDriver: true,
                    }).start();
                }
            },
        })
    ).current;

    const openMenu = () => {
        setIsMenuOpen(true);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const closeMenu = () => {
        Animated.timing(slideAnim, {
            toValue: width,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setIsMenuOpen(false);
        });
    };

    const styles = StyleSheet.create({
        header: {
            backgroundColor: color.secondary,
            paddingHorizontal: 20,
            paddingVertical: 10
        },
        innerHeader: {
            flexDirection: "row",
            justifyContent: "space-between"
        },
        headerWelcomeText: {
            fontSize: 16,
            lineHeight: 22.4,
            fontFamily: "Poppins_400Regular",
            color: color.primaryText
        },
        headerDriverName: {
            fontSize: 24,
            lineHeight: 28.8,
            fontFamily: "Poppins_700Bold",
            color: color.primaryText
        },
        headerInfoBar: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 34,
        },
        headerTariffBar: {
            marginRight: "auto",
            flexDirection: "column",
            justifyContent: "center"
        },
        headerTariffLabel: {
            fontSize: 17,
            fontWeight: "bold",
            fontFamily: "DMSans_700Bold",
            lineHeight: 22.13,
            textAlign: "right",
            color: color.primaryText
        },
        headerTariffName: {
            fontSize: 24,
            fontFamily: "DMSans_700Bold",
            lineHeight: 31.25,
            color: color.primaryText
        },
        headerTariffPrice: {
            fontSize: 14,
            fontFamily: "DMSans_700Bold",
            color: color.primaryText
        },
        headerTariffImageContainer: {
            backgroundColor: color.headerImageBackground,
            borderRadius: 40,
            paddingLeft: 4,
            paddingBottom: 15,
            paddingRight: 16,
        },
        headerWaitBar: {
            backgroundColor: color.headerBottomBackground,
            padding: 9,
            flexDirection: "column",
            alignItems: "center"
        },
        headerWaitBarText: {
            fontSize: 16,
            lineHeight: 22.4,
            fontFamily: "Poppins_600SemiBold",
            color: color.primaryText,
        },
        headerWaitBarTextTime: {
            color: color.primaryText,
            fontSize: 16,
            lineHeight: 22.4,
            fontFamily: "Poppins_500Medium"
        },

        hamburgerMenu: {
            fontSize: 24,
            color: color.primaryText,
        },


        menuButton: {
            position: 'absolute',
            top: 40,
            left: 20,
            zIndex: 1,
        },
        menuText: {
            fontSize: 30,
            color: '#000',
        },
        sideMenu: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: width * 0.8,
            height: '100%',
            backgroundColor: '#fff',
            zIndex: 2,
        },
    });

    return !isLandscape ? (
        <>
            <View style={styles.header}>
                <SvgXml
                    xml={xmlCircle}
                    style={{
                        position: "absolute",
                    }}
                />
                <View
                    style={styles.innerHeader}
                >
                    <View>
                        <Text
                            style={styles.headerWelcomeText}
                        >Ассалом алайкум,</Text>
                        <Text
                            style={styles.headerDriverName}
                        >
                            {authState?.data?.driver_name}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                    >
                        <Switch
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={theme === "dark" ? '#f5dd4b' : '#f4f3f4'}
                            onValueChange={toggleTheme}
                            value={theme === "dark"}
                        />
                        {/*<TouchableOpacity*/}
                        {/*    style={{*/}
                        {/*        marginLeft: 10*/}
                        {/*    }}*/}
                        {/*    onPress={openMenu}*/}
                        {/*>*/}
                        {/*    <Text style={styles.hamburgerMenu}>☰</Text>*/}
                        {/*</TouchableOpacity>*/}
                    </View>
                </View>
                <View style={styles.headerInfoBar}>
                    <View style={styles.headerTariffBar}>
                        <Text style={styles.headerTariffLabel}>
                            Ваш тариф:
                        </Text>
                        <Text style={styles.headerTariffName}>
                            {authState?.data?.tariff.name.toUpperCase()}
                        </Text>
                        <Text style={styles.headerTariffPrice}>
                            {authState?.data?.tariff.price} сум/км
                        </Text>
                    </View>

                    <View style={styles.headerTariffImageContainer}>
                        <Image
                            width={170}
                            height={72}
                            source={require("../../assets/black car.png")}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.headerWaitBar}>
                <Text style={styles.headerWaitBarText}>
                    Ожидание: 1 мин - {authState?.data?.waiting.price_for_expectation} сум
                </Text>
                <Text style={styles.headerWaitBarTextTime}>
                    ({authState?.data?.waiting.expectation} мин бесплатно)
                </Text>
            </View>
            {isMenuOpen && (
                <Animated.View
                    style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}
                    {...panResponder.panHandlers}
                >
                    <SideMenu navigation={navigation} closeMenu={closeMenu} />
                </Animated.View>
            )}
        </>
    ) : (
        <>
            <View style={{
                ...styles.header,
                flexDirection: "row"
            }}>
                <View style={styles.headerTariffBar}>
                    <Text style={styles.headerTariffName}>
                        {authState?.data?.tariff.name.toUpperCase()}
                    </Text>
                    <Text style={styles.headerTariffPrice}>
                        {authState?.data?.tariff.price} сум/км
                    </Text>
                </View>
                <View>
                    <Text style={styles.headerWaitBarText}>
                        Ожидание: 1 мин - {authState?.data?.waiting.price_for_expectation} сум
                    </Text>
                    <Text style={styles.headerWaitBarTextTime}>
                        ({authState?.data?.waiting.expectation} мин бесплатно)
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={theme === "dark" ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={toggleTheme}
                        value={theme === "dark"}
                    />
                    {/*<TouchableOpacity*/}
                    {/*    style={{*/}
                    {/*        marginLeft: 10*/}
                    {/*    }}*/}
                    {/*    onPress={openMenu}*/}
                    {/*>*/}
                    {/*    <Text style={styles.hamburgerMenu}>☰</Text>*/}
                    {/*</TouchableOpacity>*/}
                </View>
            </View>
            {isMenuOpen && (
                <Animated.View
                    style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}
                    {...panResponder.panHandlers}
                >
                    <SideMenu navigation={navigation} closeMenu={closeMenu} />
                </Animated.View>
            )}
        </>

    );
};

export default Header;