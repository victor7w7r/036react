import { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import { DataContext, ThemeContext } from '../context';

export const useStoreCookies = () => {

    const router = useRouter();

    const { controlBackground } = useContext(ThemeContext);
    
    const [text, setText] = useState<string>('');
    const {dataState, success} = useContext(DataContext);

    const handleSubmit = (): void => success(text);

    const handleChange = (value: string): void => {
        setText(value);
    };

    const changeToHome = (): void => {
        router.push('/')
    };

    return { 
        handleSubmit, handleChange, changeToHome,
        text, dataState, controlBackground 
    };

};