import axios from "axios"

export const fetchAnime = async (page = 1, limit = 10) => {
    const res = await axios.get('https://api.jikan.moe/v4/anime', {
        params: {
            page,
            limit
        }
    })
    const data = res.data
    return data
}

export const fetchAnimeDetail = async (id) => {
    const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`)
    console.log(res.data)
    const data = res.data
    return data
}
