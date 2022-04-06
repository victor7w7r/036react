import { ChangeEvent, useContext, useState } from 'react';

import { DataContext } from '../context';

export const useFormChanger = () => {

    const [text, setText] = useState<string>('');
    const {dataState, success} = useContext(DataContext);

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        success(text);
    };

    const handleChange = (value: string): void => {
        setText(value);
    };

    return { handleSubmit, handleChange, dataState };

};