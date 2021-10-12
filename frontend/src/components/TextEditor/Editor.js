import React from 'react';

function Editor({text, setText, textStream, setTextStream}) {

  const splitOnNewLines = (string) => string.split('\n');
  const parseBullets = (array) =>
        array.map(e => e[0] === '*' ? `<h2>${e.substring(1)}</h2>` : e);

  const editText = (event) => {
    setText(event.target.value);
    setTextStream(parseBullets(splitOnNewLines(event.target.value)));
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
