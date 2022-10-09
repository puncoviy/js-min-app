import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CreateProduct from '../components/CreateProduct'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import { Product } from '../components/Product'
import { ModalContext } from '../context/ModalContext'
import { useProducts } from '../hooks/products'
import { IProduct } from '../models'

function ProductsPage() {
    const { modal, open, close } = useContext(ModalContext)
    const { products, loading, error, addProduct } = useProducts()

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <Error />}
            {products.map((product) => (
                <Product product={product} key={uuidv4()} />
            ))}
            <button
                className="fixed bottom-2 right-2 text-xl rounded-full bg-yellow-200 px-3 py-2 active:bg-yellow-300"
                onClick={open}
            >
                Create Product
            </button>
            {modal && (
                <Modal title={'Add new Product'} onClose={close}>
                    <CreateProduct onCreate={createHandler} />
                </Modal>
            )}
        </div>
    )
}

export default ProductsPage
