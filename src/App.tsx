import React, {createElement as e} from 'react';

function App() {
//   return (
//     <h1>Hello React</h1>
//   );

    return e('div', {className: 'container'}, [
        e('h1', {className: 'font-bold'}, 'Text JSX'),
        e('button', {className: ''}, 'Click me')
    ])

}

export default App;
