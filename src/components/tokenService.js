import axios from 'axios';
import getter from '../storage/utils'
export default class tokenService {
  init = () => {
        this.setInterceptors();
  };
  
  setInterceptors = () => {
        axios.defaults.headers.common['Autorization'] = 
        axios.interceptors.request.use(req => {
            req.headers.authorization = `Bearer ${getter('token')}`
            return req;
        });
  };
  
  
}