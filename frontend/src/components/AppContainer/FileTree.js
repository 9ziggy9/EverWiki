import React, {useState, useEffect} from 'react';
import NotebookTab from './NotebookTab';
import {useSelector} from 'react-redux';

function FileTree({FILETREE_SESSION}) {

  const {library, selectedNoteId, setSelectedNoteId,
          selectedNotebookId, setSelectedNotebookId} = FILETREE_SESSION;

  const sessionNotes = useSelector(state => state.session.notes);

  const [notes, setNotes] = useState(sessionNotes);

  useEffect(() => {setNotes(sessionNotes)}, [sessionNotes]);

  return (
    <>
      {
        library.map(nb => {
          return <NotebookTab
            //Selection Vars
            selectedNoteId={selectedNoteId}
            setSelectedNoteId={setSelectedNoteId}
            selectedNotebookId={selectedNotebookId}
            setSelectedNotebookId={setSelectedNotebookId}
            // NOTES slize of state
            notes={notes}
            // Notebook information
            notebookName={nb.title}
            notebookId={nb.id}
            key={`notebook-${nb.id}`} />
        })
      }
    </>
  );
}

export default FileTree;
