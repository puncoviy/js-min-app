import { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)
    const btnToggle = details ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border rounded min-w-[120px]', btnToggle]

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img className="w-1/6" src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <span>{product.price}</span>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails((prev) => !prev)}
            >
                {details ? 'Show less' : 'Show more'}
            </button>
            {details && (
                <div>
                    <p className="pb-2">{product.description}</p>
                    <p>
                        Rate:
                        <span className="font-bold">{product.rating.rate}</span>
                    </p>
                </div>
            )}
        </div>
    )
}
