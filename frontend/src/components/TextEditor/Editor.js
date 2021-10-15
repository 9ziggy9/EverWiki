import React from 'react';

function Editor({text, setText}) {
  const editText = (event) => {
    setText(event.target.value);
  }
  return (
    <>
      <textarea defaultValue={text} id='text-editor-input' onChange={editText}>
      </textarea>
    </>
  );
}

export default Editor;
