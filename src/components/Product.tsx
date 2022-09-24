import React from 'react'
import { IProduct } from '../models'

interface ProductProps {
    product: IProduct
}

export function Product(props: ProductProps) {
    props.product.rating.count
  return (
    <div
        className='border py2 px4 rounded flex flex-col items-center mb-2'
    >{props.product.title}</div>
  )
}
