import cx from 'classnames';
import { Suspense } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import { useThemeContext } from "./theme/useTheme";

import { AboutPageAsync } from "./components/pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./components/pages/MainPage/MainPage.async";

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
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
