import axios from "axios"

const livrosAPI = axios.create({baseURL: "http://localhost:8080/livros"})

async function getLivros() {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getLivros
}