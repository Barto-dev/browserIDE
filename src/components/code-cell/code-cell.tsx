import {useState, useEffect} from "react";
import bundle from "../../bundler";

import CodeEditor from "../code-editor/code-editor";
import Preview from "../preview/preview";
import Resizable from "../resizable/resizable";


const CodeCell = () => {

    const [code, setCode] = useState('');
    const [err, setErr] = useState('');
    const [input, setInput] = useState('');

    // debounce
    useEffect(() => {
       const timer = setTimeout(async () => {
            const output = await bundle(input);
            setCode(output.code);
            setErr(output.err);
        }, 1000)

        return () => clearTimeout(timer);
    }, [input]);

    return (
        <Resizable direction="vertical">
            <div style={{height: '100%', display: 'flex', flexDirection: 'row'}}>
                <Resizable direction="horizontal">
                    <CodeEditor initialValue="const a = 1;" onChange={(value) => setInput(value)} />
                </Resizable>
                <Preview code={code} bundlingErr={err}/>
            </div>
        </Resizable>
    )
}

export default CodeCell
