import 'bulmaswatch/superhero/bulmaswatch.min.css';

import ReactDOM from 'react-dom';
import CodeCell from "./components/code-cell/code-cell";


const App = () => {



    return (
        <div>
           <CodeCell />
           {/*<CodeCell />*/}
           {/*<CodeCell />*/}
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const App = () => <h1>Hi Illia</h1>;
//
// ReactDOM.render(<App/>, document.querySelector('#root'))
