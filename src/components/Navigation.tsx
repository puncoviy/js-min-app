import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className="h-[50px] flex items-center gap-4 px-5 bg-gray-500 text-white">
            <span className="font-bold mr-auto">React Project</span>
            <span>
                <Link to="/">All Products</Link>
            </span>
            <span>
                <Link to="/about">About</Link>
            </span>
        </nav>
    )
}
