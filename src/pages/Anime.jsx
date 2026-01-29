import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchAnimeDetail } from '../services/anime'
import { BsPlayBtn } from 'react-icons/bs'
import { BiCalendar, BiHeart, BiStar, BiTrendingUp, BiTv } from 'react-icons/bi'
import { FaClock } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { useState } from 'react'
const Anime = () => {
    const [activeTab, setActiveTab] = useState('overview')
    const { id } = useParams()
    const { data, isLoading, error } = useQuery({
        queryKey: ['anime', id],
        queryFn: () => fetchAnimeDetail(id),
    })


    const anime = data?.data
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {anime && (
                <div className="min-h-screen bg-gray-950 text-gray-100">
                    {/* Hero Section with Background */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950 z-10"></div>
                        <div
                            className="h-96 bg-cover bg-center blur-sm opacity-30"
                            style={{ backgroundImage: `url(${anime?.images?.jpg?.large_image_url})` }}
                        ></div>

                        {/* Main Content */}
                        <div className="relative z-20 -mt-80 container mx-auto px-4 pb-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Poster */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={anime?.images?.jpg?.large_image_url}
                                        alt={anime?.title}
                                        className="w-64 rounded-lg shadow-2xl border-2 border-gray-800"
                                    />

                                    {/* Action Buttons */}
                                    <div className="mt-4 space-y-2">
                                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition">
                                            <BsPlayBtn size={20} />
                                            Watch Trailer
                                        </button>
                                        <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition">
                                            <BiHeart size={20} />
                                            Add to List
                                        </button>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="mt-6 bg-gray-900 rounded-lg p-4 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Score</span>
                                            <div className="flex items-center gap-1">
                                                <BiStar size={16} className="text-yellow-500 fill-yellow-500" />
                                                <span className="font-bold text-lg">{anime?.score}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Rank</span>
                                            <span className="font-bold">#{anime?.rank}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Popularity</span>
                                            <span className="font-bold">#{anime?.popularity}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Members</span>
                                            <span className="font-bold">{anime?.members?.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Favorites</span>
                                            <span className="font-bold">{anime?.favorites?.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex-1">
                                    <h1 className="text-4xl font-bold mb-2">{anime.title}</h1>
                                    <h2 className="text-xl text-gray-400 mb-4">{anime.title_japanese}</h2>

                                    {/* Info Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                        <div className="bg-gray-900 p-3 rounded-lg">
                                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                                                <BiTv size={16} />
                                                Type
                                            </div>
                                            <div className="font-semibold">{anime?.type}</div>
                                        </div>

                                        <div className="bg-gray-900 p-3 rounded-lg">
                                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                                                <BiCalendar size={16} />
                                                Episodes
                                            </div>
                                            <div className="font-semibold">{anime?.episodes}</div>
                                        </div>

                                        <div className="bg-gray-900 p-3 rounded-lg">
                                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                                                < FaClock size={16} />
                                                Duration
                                            </div>
                                            <div className="font-semibold">{anime?.duration}</div>
                                        </div>

                                        <div className="bg-gray-900 p-3 rounded-lg">
                                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                                                <BiTrendingUp size={16} />
                                                Status
                                            </div>
                                            <div className="font-semibold">{anime?.status}</div>
                                        </div>
                                    </div>

                                    {/* Genres & Themes */}
                                    {/* <div className="mb-6">
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {anime?.genres.map((genre, idx) => (
                                                <span key={idx} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-600/50">
                                                    {genre.name}
                                                </span>
                                            ))}
                                            {anime?.themes.map((theme, idx) => (
                                                <span key={idx} className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-purple-600/50">
                                                    {theme.name}
                                                </span>
                                            ))}
                                            {anime?.demographics.map((demo, idx) => (
                                                <span key={idx} className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-600/50">
                                                    {demo.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div> */}

                                    {/* Tabs */}
                                    <div className="border-b border-gray-800 mb-6">
                                        <div className="flex gap-6">
                                            {['overview', 'details', 'songs', 'streaming'].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setActiveTab(tab)}
                                                    className={`pb-3 px-1 font-semibold capitalize transition ${activeTab === tab
                                                        ? 'border-b-2 border-blue-500 text-blue-500'
                                                        : 'text-gray-400 hover:text-gray-300'
                                                        }`}
                                                >
                                                    {tab}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tab Content */}
                                    <div className="bg-gray-900 rounded-lg p-6">
                                        {activeTab === 'overview' && (
                                            <div>
                                                <h3 className="text-xl font-bold mb-4">Synopsis</h3>
                                                <p className="text-gray-300 leading-relaxed mb-6">{anime.synopsis}</p>

                                                {anime.background && (
                                                    <>
                                                        <h3 className="text-xl font-bold mb-4">Background</h3>
                                                        <p className="text-gray-300 leading-relaxed">{anime.background}</p>
                                                    </>
                                                )}
                                            </div>
                                        )}

                                        {activeTab === 'details' && (
                                            <div className="space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="text-sm text-gray-400 mb-2">Aired</h4>
                                                        <p className="text-gray-200">{anime?.aired.string}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm text-gray-400 mb-2">Season</h4>
                                                        <p className="text-gray-200 capitalize">{anime?.season} {anime?.year}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm text-gray-400 mb-2">Broadcast</h4>
                                                        <p className="text-gray-200">{anime?.broadcast.string}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm text-gray-400 mb-2">Source</h4>
                                                        <p className="text-gray-200">{anime?.source}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm text-gray-400 mb-2">Studios</h4>
                                                        <p className="text-gray-200">{anime?.studios.map(s => s.name).join(', ')}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm text-gray-400 mb-2">Producers</h4>
                                                        <p className="text-gray-200">{anime?.producers.map(p => p.name).join(', ')}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm text-gray-400 mb-2">Licensors</h4>
                                                        <p className="text-gray-200">{anime?.licensors.map(l => l.name).join(', ')}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm text-gray-400 mb-2">Rating</h4>
                                                        <p className="text-gray-200">{anime?.rating}</p>
                                                    </div>
                                                </div>

                                                {anime.relations.length > 0 && (
                                                    <div className="mt-6">
                                                        <h4 className="text-lg font-bold mb-3">Related Anime</h4>
                                                        <div className="space-y-2">
                                                            {anime?.relations.map((rel, idx) => (
                                                                <div key={idx} className="bg-gray-800 p-3 rounded">
                                                                    <span className="text-blue-400 font-semibold">{rel?.relation}: </span>
                                                                    <span className="text-gray-300">{rel?.entry.map(e => e.name).join(', ')}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {activeTab === 'songs' && (
                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="text-lg font-bold mb-3">Opening Themes</h4>
                                                    <div className="space-y-2">
                                                        {anime?.theme?.openings.map((op, idx) => (
                                                            <div key={idx} className="bg-gray-800 p-3 rounded text-gray-300">
                                                                {op}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="text-lg font-bold mb-3">Ending Themes</h4>
                                                    <div className="space-y-2">
                                                        {anime?.theme?.endings.map((ed, idx) => (
                                                            <div key={idx} className="bg-gray-800 p-3 rounded text-gray-300">
                                                                {ed}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'streaming' && (
                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="text-lg font-bold mb-3">Watch On</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {anime?.streaming?.map((stream, idx) => (
                                                            <a
                                                                key={idx}
                                                                href={stream.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg flex items-center justify-between transition group"
                                                            >
                                                                <span className="font-semibold">{stream.name}</span>
                                                                <FiExternalLink size={18} className="text-gray-400 group-hover:text-blue-400" />
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="text-lg font-bold mb-3">External Links</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {anime?.external?.map((ext, idx) => (
                                                            <a
                                                                key={idx}
                                                                href={ext.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg flex items-center justify-between transition group"
                                                            >
                                                                <span className="font-semibold">{ext.name}</span>
                                                                <FiExternalLink size={18} className="text-gray-400 group-hover:text-blue-400" />
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Anime