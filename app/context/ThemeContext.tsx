import React, {createContext, FC, useContext, useState} from 'react';
import colors from "../../theme/colors";

interface IThemeContext {
    theme: "light" | "dark";
    toggleTheme: () => void;
    color: typeof colors.light;
}

const ThemeContext = createContext<IThemeContext>({
    theme: "light",
    toggleTheme: () => {},
    color: colors.light,
});

interface IThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const color = colors[theme];

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, color }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);