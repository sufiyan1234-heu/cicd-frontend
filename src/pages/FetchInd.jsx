import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const FetchInd = () => {

    const { id } = useParams()
    const fetchPost = async (id) => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            console.log(res)
            return res.status === 200 ? res.data : [];
        } catch (error) {
            console.log(error)
            return error
        }
    }
    const { data, isLoading, error } = useQuery({
        queryKey: ['post', id],
        queryFn: () => fetchPost(id),
    })
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
        <div>

            {data && (
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                </div>
            )}
        </div>
    )
}

export default FetchInd