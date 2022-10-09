import React from 'react'
import { useProducts } from '../hooks/products'

export default function Error() {
    const { error } = useProducts()
    return <p className="text-center font-bold text-red-500">{error}</p>
}
