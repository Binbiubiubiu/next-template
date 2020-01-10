import axios from 'axios';

// const customHeaderToken = 'token';

const service = axios.create({
  baseURL: process.env.BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    // if (store.getters.token) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    // config.headers[customHeaderToken] = getToken()
    // }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;

    // if the custom code is not 200, it is judged as an error.
    // if (res.code !== 200) {
    // $message({
    //   message: res.message || 'Error',
    //   type: 'error',
    //   duration: 5 * 1000
    // })

    // // 500: Illegal token
    // store.dispatch('user/resetToken').then(() => {
    //   location.reload()
    // })
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    return res;
    // }
  },
  (error) => {
    const errData = error.response ? error.response.data : {};

    // 500: Illegal token
    if (errData.message) {
    }

    return Promise.reject(errData);
  },
);

export default service;
