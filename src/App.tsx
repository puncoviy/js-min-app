import { v4 as uuidv4 } from 'uuid'
import CreateProduct from './components/CreateProduct'
import Error from './components/Error'
import Loader from './components/Loader'
import Modal from './components/Modal'
import { Product } from './components/Product'
import { useProducts } from './hooks/products'

function App() {
    const { products, loading, error } = useProducts()

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <Error />}
            {products.map((product) => (
                <Product product={product} key={uuidv4()} />
            ))}
            <Modal title={'Add new Product'}>
                <CreateProduct />
            </Modal>
        </div>
    )
}

export default App
