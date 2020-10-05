import axios from 'axios'
import { getUrl } from '../helpers'

const path = getUrl('/api/auth')

export default {
  login: params => axios.post(`${path}`, params),
}
