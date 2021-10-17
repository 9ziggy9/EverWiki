import React from 'react';
import NotebookTab from './NotebookTab';
import {useSelector} from 'react-redux';

function FileTree({selectedNotebookId, setSelectedNotebookId,
            selectedNoteId, setSelectedNoteId}) {
  const library = useSelector(state => state.session.library);
  return (
    <>
      {
        library.map(nb => {
          return <NotebookTab
            selectedNoteId={selectedNoteId}
            setSelectedNoteId={setSelectedNoteId}
            selectedNotebookId={selectedNotebookId}
            setSelectedNotebookId={setSelectedNotebookId}
            notebookName={nb.title}
            notebookId={nb.id}
            key={`notebook-${nb.id}`} />
        })
      }
    </>
  );
}

export default FileTree;
