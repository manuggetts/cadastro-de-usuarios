import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cadastro-de-usuarios-xtav.onrender.com'
})

export default api