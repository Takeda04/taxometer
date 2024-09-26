import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {FC} from "react";
import {useTheme} from "../../app/context/ThemeContext";
import colors from "../../theme/colors";

interface CustomButtonProps {
    onPress?: () => void;
    title?: string;
    type?: "primary" | "secondary" | "success" | "warning" | "danger";
    disabled?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({onPress, title, type = "primary", disabled}) => {
    const { color } = useTheme();

    const getBackgroundColorByType = (type: string) => {
        switch (type) {
            case "primary":
                return color.primaryButtonColor;
            case "secondary":
                return "#cccccc";
            case "success":
                return "#f1c232";
            case "warning":
                return "#f1c232";
            case "danger":
                return color.dangerButtonColor;
            default:
                return "#f1c232";
        }
    }

    const getColorByType = (type: string) => {
        switch (type) {
            case "primary":
                return color.primaryText;
            case "secondary":
                return "#cccccc";
            case "success":
                return "#f1c232";
            case "warning":
                return "#f1c232";
            case "danger":
                return color.dangerButtonTextColor;
            default:
                return "#f1c232";
        }
    }

    const styles = StyleSheet.create({
        button: {
            paddingVertical: 16,
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            elevation: 3,
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {height: 2, width: 0},
            backgroundColor: getBackgroundColorByType(type),
        },
        text: {
            color: getColorByType(type),
            fontSize: 18,
            lineHeight: 24,
            fontFamily: "DMSans_700Bold"
        }
    });
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={styles.button}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;
