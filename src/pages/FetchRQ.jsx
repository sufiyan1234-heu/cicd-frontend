import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const FetchRQ = () => {

    const fetchPosts = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(res)
            return res.status === 200 ? res.data : [];
        } catch (error) {
            console.log(error)
            return error
        }
    }


    const { data, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        // gcTime: 1000,
        // staleTime: 15000,
        refetchInterval: 1000,
        refetchIntervalInBackground: true
    })

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
        <div className='flex flex-col gap-4 p-4'>
            <h1>FetchRQ</h1>
            {data && (
                <ul className='flex flex-col gap-4'>
                    {data?.map(post => (
                        <NavLink key={post.id} to={`/fetch-ind/${post.id}`}>
                            <div className='flex flex-col gap-4 border rounded-3xl border-black p-4' >
                                <li>{post.title}</li>
                                <p>{post.body}</p>
                            </div>
                        </NavLink>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default FetchRQ