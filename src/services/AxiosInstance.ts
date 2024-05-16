import axios from "axios";



const authAxios=axios.create({
  baseURL:'https://aeb0-223-233-82-57.ngrok-free.app',
  headers: {
    "ngrok-skip-browser-warning": "skip-browser-warning",
  },

})

export default authAxios