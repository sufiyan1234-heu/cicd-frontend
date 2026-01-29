import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="flex items-center justify-between w-full p-4">
            <div className="flex gap-4 justify-between items-center text-white w-full">
                <NavLink to="/" className="text-2xl font-bold">TanStack Query</NavLink>
                <ul className="flex gap-4">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fetch-old">Fetch Old</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fetch-rq">Fetch RQ</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header