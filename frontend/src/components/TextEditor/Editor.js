import React from 'react';

function Editor({text, setText}) {
  const editText = (event) => {
    setText(event.target.value);
  }
  return (
    <>
      <textarea id='text-editor-input' onChange={editText}>
        {text}
      </textarea>
    </>
  );
}

export default Editor;
