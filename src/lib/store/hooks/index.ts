import { type ChangeEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { mutate } from '@/common/slices/data-slice'
import { useAppDispatch } from '@core/modules'

export const useStorePage = () => {
  const text = useRef('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = () => dispatch(mutate(text.current))

  const handleChange = (event: ChangeEvent) =>
    (text.current = (event.target as HTMLInputElement).value)

  const changeToHome = () => navigate('/')

  return {
    handleSubmit,
    handleChange,
    changeToHome,
    text
  }
}
