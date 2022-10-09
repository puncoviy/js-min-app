import { v4 as uuidv4 } from 'uuid'
import Error from './components/Error'
import Loader from './components/Loader'
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
        </div>
    )
}

export default App
