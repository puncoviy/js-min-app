import React, { createElement as e, useState } from 'react';
import { Product } from './components/Product';
import { products } from './data/products';

{/* <h1 className="font-bold" key='1'>Text in JSX {count}</h1>
            <button className="py-2 px-4 border"
                onClick={() => setCount(count + 1)}
            >Click me</button> */}

//   return (
//     <h1>Hello React</h1>
//   );

// const [count, setCount] = useState(0)

// return e('div', {className: 'container'}, [
//     e('h1', {className: 'font-bold', key: 1}, `Text JSX ${count}`),
//     e('button', {
//         className: 'py-2 px-4 border', 
//         key: 2, 
//         onClick: () => setCount(count + 1)
//     }, 'Click me')
// ])

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <Product product={products[0]} />
        </div>
    )
}

export default App;
