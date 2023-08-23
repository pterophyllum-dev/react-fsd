import { FC, useMemo, useState } from 'react';

import { Theme } from "./ThemeContext";

import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultThemeProps = useMemo(
        () => ({
            theme,
            setTheme,
        }), [theme, setTheme])

    return (
        <ThemeContext.Provider value={defaultThemeProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
