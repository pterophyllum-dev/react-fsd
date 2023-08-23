import cx from 'classnames';
import { Suspense } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import { useThemeContext } from "./providers/ThemeProvider";

import './styles/index.scss'

const App = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <div className={cx('app', theme)}>
            <header>
                <Link to={'/'}>main</Link>
                <Link to={'/about'}>about</Link>
                <button type="button" onClick={toggleTheme}>THEME</button>
            </header>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
