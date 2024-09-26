import React, {FC} from 'react';
import {StyleProp, Text, View} from "react-native";
import {useTheme} from "../context/ThemeContext";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

interface IStatProps {
    label: string;
    value: number | string;
    measurementLabel: string;
    isMain?: boolean;
    style?: any,
}

const Stat: FC<IStatProps> = ({ label, value, measurementLabel, isMain, style }) => {
    const { theme, color } = useTheme();

    return (
        <View
            style={{
                alignItems: "center",
                ...style,
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    lineHeight: 24,
                    fontFamily: "DMSans_700Bold",
                    color: color.primaryText
                }}
            >{label}</Text>
            <View
                style={{
                    borderColor: theme === "light" ? "#FCBF00" : "#BFBFBF",
                    borderWidth: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    flexDirection: "row",
                    borderRadius: 16,
                    backgroundColor: color.statBackground,
                    marginTop:6
                }}
            >
                <Text
                    style={{
                        fontSize: isMain ? 26 : 22,
                        fontFamily: "DMSans_700Bold",
                    }}
                >
                    {value}
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        lineHeight: 24,
                        fontFamily: "DMSans_700Bold",
                        marginLeft: 4,
                        marginTop: "auto"
                    }}
                >
                    {measurementLabel}
                </Text>
            </View>
        </View>
    );
};

export default Stat;