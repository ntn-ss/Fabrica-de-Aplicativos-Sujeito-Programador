import axios from 'axios'

// para pegar um certo CEP: /{CEP}/json
const api = axios.create({
 baseURL: 'https://viacep.com.br/ws'
});

export default api;