
import axios from 'axios'

const getToken = () => {
    return new Promise(resolve => {
        resolve(`Bearer ${localStorage.getItem('token') || null}`)
    })
}

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://fake-store-api-production-c25d.up.railway.app/'
        : 'https://fake-store-api-production-c25d.up.railway.app/'
})

api.interceptors.request.use(async function (config) {
    config.headers['Authorization'] = await getToken()
    return config
}, function (error) {
    console.log('Request error: ', error)
    return Promise.reject(error)
});

export default api




















// import axios from "axios";
// let apiUrl;

// const getToken = () => {
//   return new Promise(resolve => {
//       resolve(`Bearer ${localStorage.getItem('token') || null}`)
//   })
// }

// api.interceptors.request.use(async function (config) {
//   config.headers['Authorization'] = await getToken()
//   return config
// }, function (error) {
//   console.log('Request error: ', error)
//   return Promise.reject(error)
// });

// const apiUrls = {
//   production: "https://fake-store-api-production-c25d.up.railway.app/",
//   development: "https://fake-store-api-production-c25d.up.railway.app/",
// };

// if (window.location.hostname === "localhost") {
//   apiUrl = apiUrls.development;
// } else {
//   apiUrl = apiUrls.production;
// }


// export default api;
