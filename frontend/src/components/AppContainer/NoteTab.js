import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function NoteTab({ selectedNoteId,
            setSelectedNoteId,
            noteName, noteId}) {
  const [btnState, setBtnState] = useState('unselected');

  function selectTab() {
    if(selectedNoteId !== noteId)
      setSelectedNoteId(noteId);
    else
      setSelectedNoteId(null);
  }

  useEffect(() => {
    if(selectedNoteId === noteId) {
      setBtnState('note-btn-selected')
    } else {
      setBtnState('unselected')
    }
  }, [selectedNoteId])

  return (
    <Link to={`/note/${noteId}`}>
      <button onClick={selectTab} className='note-btn' id={`${btnState}`}>
        {noteName}
      </button>
    </Link>
  );
}

export default NoteTab;
