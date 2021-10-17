import React from 'react';

function NotebookSelector({title}) {
  return (
    <>
      <p>Title: </p>
      <textarea defaultValue={title} id='title-area'></textarea>
    </>
  );
}

export default NotebookSelector;
