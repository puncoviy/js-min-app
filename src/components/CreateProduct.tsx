import axios from 'axios'
import React, { useState } from 'react'
import { IProduct } from '../models'

interface createProductProps {
    onCreate: (product: IProduct) => void
}

export default function CreateProduct({ onCreate }: createProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const newProductData: IProduct = {
        title: 'test product',
        price: 13.5,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, aspernatur?',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 4,
            count: 100,
        },
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }
        newProductData.title = value
        const response = await axios.post<IProduct>(
            'https://fakestoreapi.com/products',
            newProductData
        )
        onCreate(response.data)
    }

    return (
        <>
            <form className="flex" onSubmit={submitHandler}>
                <input
                    type="text"
                    className="border py-2 px-4 flex-grow"
                    placeholder="Enter product title"
                    value={value}
                    onChange={changeHandler}
                />
                <button
                    type="submit"
                    className="py-2 px-4 border bg-yellow-300 active:bg-yellow-400"
                >
                    Submit
                </button>
            </form>
            {error && (
                <p className="text-center my-2 font-bold text-red-800">
                    {error}
                </p>
            )}
        </>
    )
}
