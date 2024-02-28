import axios from 'axios'
// create an axios instance

const service = axios.create({
    baseURL: 'https://portfolio.usemock.com', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 0 // request timeout
})

// request interceptor
service.interceptors.request.use(
    (config) => {
        // do something before request is sent
        // config.headers.token = localStorage.getItem('token')

        return config
    },
    (error) => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    (res) => {
        if (res.status !== 200) {
            return Promise.reject(new Error('Error'))
        } else {
            return Promise.resolve(res.data)
        }
    },
    (error) => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service
