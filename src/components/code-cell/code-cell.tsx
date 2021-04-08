import React, {useEffect} from "react";
import {Cell} from "../../redux";
import {useActions} from "../../hooks/use-action";
import {useTypedSelector} from "../../hooks/use-typed-selector";

import CodeEditor from "../code-editor/code-editor";
import Preview from "../preview/preview";
import Resizable from "../resizable/resizable";

interface CodeCellProps {
    cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({cell}) => {

    const {updateCell, createBundle} = useActions();
    const bundle = useTypedSelector((state) => state.bundles[cell.id]);

    // debounce
    useEffect(() => {
       const timer = setTimeout(async () => {
            createBundle(cell.id, cell.content)
        }, 1000)

        return () => clearTimeout(timer);
    }, [cell.content, cell.id, createBundle]);

    return (
        <Resizable direction="vertical">
            <div style={{height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row'}}>
                <Resizable direction="horizontal">
                    <CodeEditor initialValue={cell.content} onChange={(value) => updateCell(cell.id, value)} />
                </Resizable>
                {bundle && <Preview code={bundle.code} bundlingErr={bundle.err} />}
            </div>
        </Resizable>
    )
}

export default CodeCell
