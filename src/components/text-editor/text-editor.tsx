import React, {useState, useEffect, useRef} from "react";

import MDEditor from '@uiw/react-md-editor';

const TextEditor: React.FC = () => {
    const [editing, setEditing] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const listener = (evt: MouseEvent) => {
            // если реф уже создался у клика есть какой-то таргерт
            // и если цель клика является потомком рефа, редактор не закрывается
            if (ref.current && evt.target && ref.current?.contains(evt.target as Node)) {
                console.log('element clicked on is inside editor');
                return;
            }
            setEditing(false);
        };
        document.addEventListener('click', listener, {capture: true});

        return () => document.removeEventListener('click', listener, {capture: true})
    }, [])

    if (editing) {
        return (
            <div ref={ref}>
                <MDEditor />
            </div>
        )
    }

    return (
        <div onClick={() => setEditing(true)}>
            <MDEditor.Markdown source={'# Test editor'} />
        </div>)
}

export default TextEditor
