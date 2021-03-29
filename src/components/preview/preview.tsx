import React, {useRef, useEffect} from 'react';
import './preview.css'

interface PreviewProps {
    code: string
}

const html = `
<html>
<head></head>
<body>
<div id="root"></div>
<script>
window.addEventListener('message', (evt) => {
  try {
    eval(evt.data);
  } catch (err) {
    const root = document.querySelector('#root');
    root.innerHTML = '<div style="color:red;"><h4>' + err + '</h4></div>';
    console.error(err);
  }
  
  }, false)
</script>
</body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({code}) => {
    const iframe = useRef<any>();
    useEffect(() => {
        iframe.current.srcdoc = html;
          iframe.current.contentWindow.postMessage(code, '*')
    }, [code])

    return (
        <iframe
            className="preview"
            title="preview"
            ref={iframe}
            sandbox="allow-scripts"
            srcDoc={html}/>
    );
};

export default Preview;
