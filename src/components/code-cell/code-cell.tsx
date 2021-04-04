import React, {useState, useEffect} from "react";
import bundle from "../../bundler";
import {Cell} from "../../redux";
import {useActions} from "../../hooks/use-action";

import CodeEditor from "../code-editor/code-editor";
import Preview from "../preview/preview";
import Resizable from "../resizable/resizable";

interface CodeCellProps {
    cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({cell}) => {

    const [code, setCode] = useState('');
    const [err, setErr] = useState('');
    const {updateCell} = useActions();

    // debounce
    useEffect(() => {
       const timer = setTimeout(async () => {
            const output = await bundle(cell.content);
            setCode(output.code);
            setErr(output.err);
        }, 1000)

        return () => clearTimeout(timer);
    }, [cell.content]);

    return (
        <Resizable direction="vertical">
            <div style={{height: '100%', display: 'flex', flexDirection: 'row'}}>
                <Resizable direction="horizontal">
                    <CodeEditor initialValue={cell.content} onChange={(value) => updateCell(cell.id, value)} />
                </Resizable>
                <Preview code={code} bundlingErr={err}/>
            </div>
        </Resizable>
    )
}

export default CodeCell
