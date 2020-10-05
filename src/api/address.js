import axios from 'axios'
import { getUrl } from '../helpers'

const path = getUrl('/api/address')

export default {
  fetch: params => axios.get(`${path}/${params}`),
}
