import axios from 'axios'

let url = ''

export const requestLogin = params => {
  return axios.post(`${url}/login`, params)
}