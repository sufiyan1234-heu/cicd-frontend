import React from 'react'

const Footer = () => {
    return (
        <footer className="flex text-white items-center justify-center w-full p-4">
            <p>
                &copy; {new Date().getFullYear()} TanStack Query
            </p>
        </footer>
    )
}

export default Footer