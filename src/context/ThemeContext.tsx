import { FC, createContext, ReactNode, useState, useEffect } from "react";

import type { TThemeContext } from "../types";
import { Header } from '../components/Header';

export const ThemeContext = createContext<TThemeContext>( {} as TThemeContext );

export const ThemeProvider: FC<{children: ReactNode}> = ({ children }): JSX.Element => {
    
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [whiteBackground, setWhiteBackground] = useState<string>('bg-white');
    const [darkBackground, setDarkBackground] = useState<string>('dark:bg-zinc-900');
    const [controlBackground, setControlBackground] = useState<string>('bg-slate-700/30');
    const [togglePeer, setTogglePeer] = useState<string>('');

    useEffect(()=> {
        const isDark: boolean = document.body.classList.contains("dark");
        isDark ? setDarkMode(true) : setDarkMode(false); 
    },[]);

    const valuables: TThemeContext = {
        darkMode, setDarkMode, whiteBackground,
        darkBackground, setWhiteBackground, 
        setDarkBackground, controlBackground, setControlBackground,
        setTogglePeer, togglePeer
    };

    return (
        <ThemeContext.Provider value={valuables}>
            <div className={`h-screen transition-colors duration-1000 ${whiteBackground} ${darkBackground}`}>
                {children}
                <Header />
            </div>
        </ThemeContext.Provider>
    );
};