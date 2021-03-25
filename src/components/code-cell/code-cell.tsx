import {useState} from "react";
import bundle from "../../bundler";

import CodeEditor from "../code-editor/code-editor";
import Preview from "../preview/preview";
import Resizable from "../resizable/resizable";

const CodeCell = () => {

    const [code, setCode] = useState('');
    const [input, setInput] = useState('');

    const onClick = async () => {
        const output = await bundle(input);
        setCode(output);
    }

    return (
        <Resizable direction="vertical">
            <div>
                <CodeEditor initialValue="const a = 1;" onChange={(value) => setInput(value)} />
                <div>
                    <button onClick={onClick}>Submit</button>
                </div>
                <Preview code={code} />
            </div>
        </Resizable>
    )
}

export default CodeCell
