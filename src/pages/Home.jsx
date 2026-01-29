import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { fetchAnime } from "../services/anime"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);
    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery({
        queryKey: ['anime', page, limit],
        queryFn: () => fetchAnime(page, limit),
        placeholderData: keepPreviousData,
    })
    return (
        <div className="flex flex-col items-center justify-center">
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-5xl mx-auto">
                    {data.data.map((anime) => (
                        <div onClick={() => navigate(`/anime/${anime.mal_id}`)} key={anime.mal_id} className="bg-white rounded-lg shadow-md p-4 w-fit cursor-pointer">
                            <img className="w-64 h-90 object-cover rounded-lg" src={anime.images.jpg.image_url} alt={anime.title} />
                            <h2 className="text-lg font-bold text-ellipsis overflow-hidden w-60 mt-2 text-center wrap-break-word text-gray-800">{anime.title}</h2>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex gap-2 mt-4 justify-center items-center">
                <button disabled={page === 1} className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setPage(page - 1)}>Previous</button>
                <button disabled={page === data?.pagination.last_visible_page} className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setPage(page + 1)}>Next</button>

            </div>

        </div>
    )
}

export default Home