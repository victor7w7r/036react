export type TThemeContext = { 
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
    whiteBackground: string,
    darkBackground: string,
    setWhiteBackground: React.Dispatch<React.SetStateAction<string>>,
    setDarkBackground: React.Dispatch<React.SetStateAction<string>>,
    controlBackground: string,
    setControlBackground: React.Dispatch<React.SetStateAction<string>>,
    setTogglePeer: React.Dispatch<React.SetStateAction<string>>,
    togglePeer: string
};