import React from 'react';

function NotebookSelector({title, setTitle}) {

  const editText = (event) => {
    setTitle(event.target.value);
  }

  return (
    <>
      <p>Title: </p>
      <textarea defaultValue={title} id='title-area' onChange={editText}>
      </textarea>
    </>
  );
}

export default NotebookSelector;
