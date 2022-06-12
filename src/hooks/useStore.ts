import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import { DataContext, ThemeContext } from '../context';

export const useStore = () => {

    const navigate = useNavigate();

    const { controlBackground } = useContext(ThemeContext);

    const [text, setText] = useState<string>('');
    const {dataState, success} = useContext(DataContext);

    const handleSubmit = (): void => success(text);

    const handleChange = (value: string): void => {
        setText(value);
    };

    const changeToHome = (): void => navigate('/');

    return { 
        handleSubmit, handleChange, changeToHome,
        text, dataState, controlBackground 
    };

};