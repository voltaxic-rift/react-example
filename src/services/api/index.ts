import axiosbase from 'axios'

const axios = axiosbase.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json'
})

export default axios