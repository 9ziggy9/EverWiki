import React from 'react';

function Editor({text, setText, textStream, setTextStream}) {

  const splitOnNewLines = (string) => string.split('\n');
  const parseBullets = (array) => array.map(e => {
    switch (e[0]) {
      case '*':
        let n = 0;
        while(e[n] === '*') n++;
        return `<h${n+2}>${e.slice(n)}</h${n+2}>`;
      default:
        return `<p>${e}</p>`;
    }
  });

  const editText = (event) => {
    setText(event.target.value);
    setTextStream(parseBullets(splitOnNewLines(event.target.value)).join(''));
  }

  return (
    <>
      <textarea onChange={editText}>
        {text}
      </textarea>
    </>
  );
}

export default Editor;
