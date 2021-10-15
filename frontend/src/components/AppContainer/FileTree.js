import React from 'react';
import NotebookTab from './NotebookTab';
import {useSelector} from 'react-redux';

function FileTree() {
  const library = useSelector(state => state.session.library);
  return (
    <>
      {
        library.map(nb => (
        <NotebookTab
          notebookName={nb.title}
          notebookId={nb.id}
          key={`notebook-${nb.id}`} />
        ))
      }
    </>
  );
}

export default FileTree;
