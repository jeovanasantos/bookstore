import axios from "axios"

const livrosAPI = axios.create({baseURL: "http://localhost:8080/favoritos"})

async function getFavoritos() {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
getFavoritos
}