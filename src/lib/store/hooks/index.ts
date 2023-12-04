import { type ChangeEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { mutate } from '@/common/slices/data-slice';

import { useAppDispatch } from '@store/index';

export const useStorePage = () => {
  const text = useRef('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (): void => {
    dispatch(mutate(text.current));
  };

  const handleChange = (event: ChangeEvent): string =>
    (text.current = (event.target as HTMLInputElement).value);

  const changeToHome = () => navigate('/');

  return {
    handleSubmit,
    handleChange,
    changeToHome,
    text
  };
};
