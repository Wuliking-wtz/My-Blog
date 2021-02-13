import axios from 'axios'

export default function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://localhost:8081',
    // baseURL: 'http://47.119.119.138:80',
    timeout: 360000
  })
  // 2. axios的拦截器
  instance.interceptors.request.use(
    res => {
      if (res) {
        const token = localStorage.getItem("token");
        if (token != null) {
          res.headers.Authorization = token;
        }
        return res;
      }
    }, error => {
      console.log(error);
    })

  // 2.2. 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res)
    // if (res && res.data && res.data.token) {
    //   localStorage.setItem("token", res.data.token)
    // }
    return res.data
  }, error => {
    console.log(error);
  })
  return instance(config);
}
