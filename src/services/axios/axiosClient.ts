import { TMDB_BASE_URL } from '@src/constants/links'
import axios from 'axios'

const axiosClient = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosClient
