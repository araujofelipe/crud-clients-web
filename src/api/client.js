import axios from 'axios'
import { getUrl } from '../helpers'
import {getter} from '../storage/utils'

const path = getUrl('/api/clients')
axios.interceptors.request.use(async (config) => {
  console.log(config.url)
  if (!config.url.endsWith('auth')) {
      console.log(getter('token'))
      const userToken = getter('token')
      config.headers.Authorization = `Bearer ${userToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
})
export default {
  create: params => axios.post(`${path}`, params),
  fetchAll: () => axios.get(`${path}`)
}
