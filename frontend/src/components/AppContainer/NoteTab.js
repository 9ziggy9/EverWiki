import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function NoteTab({ selectedNoteId,
            setSelectedNoteId,
            noteName, noteId}) {
  const [btnState, setBtnState] = useState('unselected');

  function selectTab() {
    setSelectedNoteId(noteId)
  }

  useEffect(() => {
    if(selectedNoteId === noteId) {
      setBtnState('note-btn-selected')
    } else {
      setBtnState('unselected')
    }
    console.log("selectedNoteId:",selectedNoteId);
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
