import { TMDB_BASE_URL } from '@src/constants/links'
import axios from 'axios'

const axiosClient = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
})

export default axiosClient
