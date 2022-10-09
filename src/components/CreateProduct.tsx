import React from 'react'

export default function () {
    return (
        <form className="flex">
            <input
                type="text"
                className="border py-2 px-4 flex-grow"
                placeholder="Enter product title"
            />
            <button type="submit" className="py-2 px-4 border bg-yellow-300">
                Submit
            </button>
        </form>
    )
}
