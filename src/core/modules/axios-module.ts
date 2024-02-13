import axios from 'axios'

export const timeout = 5000

export const axiosClient = axios.create({
  baseURL: 'https://api2.binance.com/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
