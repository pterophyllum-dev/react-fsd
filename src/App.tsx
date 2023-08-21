import { Suspense } from "react";
import { Routes, Route, Link } from 'react-router-dom'

import { AboutPageAsync } from "./components/pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./components/pages/MainPage/MainPage.async";

import './index.scss'

const App = () => {
    return (
        <div className="app">
            <header>
                <Link to={'/'}>main</Link>
                <Link to={'/about'}>about</Link>
            </header>
            <Suspense fallback={'<div>loading...</div>'}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
