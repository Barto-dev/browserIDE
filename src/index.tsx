import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./redux";
import CodeCell from "./components/code-cell/code-cell";
import TextEditor from "./components/text-editor/text-editor";

import 'bulmaswatch/superhero/bulmaswatch.min.css';

const App = () => {



    return (
        <Provider store={store}>
            <div>
                {/*<CodeCell />*/}
                <TextEditor />
            </div>
        </Provider>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const App = () => <h1>Hi Illia</h1>;
//
// ReactDOM.render(<App/>, document.querySelector('#root'))
