import axios from 'axios'

// export const basicURL = "" ;
export const basicURL = "http://192.168.29.226:6134/salonadmin" ;

export const  axiosConfig = axios.create({
    baseURL:basicURL,
    withCredentials:true
})

axiosConfig.interceptors.request.use(
function (config) {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  } else {
    console.log("error");
  }

  return config;
});