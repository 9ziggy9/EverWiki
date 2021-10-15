import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import NoteTab from './NoteTab';


function NotebookTab({notebookName, notebookId}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const notes = useSelector(state => state.session.notes);
  let noteTree;
  if(isExpanded) {
   noteTree = (
    <div className='collapsible-notes'>
      {
        notes.map(note => {
          if(note.id === notebookId) {
            return <NoteTab
              noteId={note.id}
              key={`note-${note.id}`}
              noteName={note.title} />
          }
        })
      }
    </div>
   );
  }
  function expand() {
    if(isExpanded) setIsExpanded(false)
    else setIsExpanded(true);
  }
  return (
    <div className='notebook-node'>
      <button onClick={expand} className='notebook-btn'>
        {notebookName}
      </button>
      {isExpanded && noteTree}
    </div>
  );
}

export default NotebookTab;
