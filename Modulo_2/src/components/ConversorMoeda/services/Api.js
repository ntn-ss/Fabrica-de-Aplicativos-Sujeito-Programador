import axios from 'axios'

// https://economia.awesomeapi.com.br/json/all

// Rota para buscar USD>BRL: /all/USD-BRL

const Api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json'
})

export default Api