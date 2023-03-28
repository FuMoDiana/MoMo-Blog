import axios from 'axios';
import {BASE_URL,TIMEOUT} from './config';


class HYRequest{
  
  constructor(baseURL,timeout){
    this.instance = axios.create({
      baseURL,
      timeout
    })
    
    //拦截器
    this.instance.interceptors.response.use((res)=>{
      return res.data
    },err=>{
      return err
    })
  }

  
  request(config){
    return this.instance.request(config)
  }

  get(config){
    return this.request({...config,method:"get"})
  }

  post(config){
    return this.request({...config,method:"post"})
  }

  delete(config){
    return this.request({...config,method:"delete"})
  }

  patch(config){
    return this.request({...config,method:"patch"})
  }
  //设置请求头
  setToken(token) {
    this.instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

export default new HYRequest(BASE_URL,TIMEOUT);