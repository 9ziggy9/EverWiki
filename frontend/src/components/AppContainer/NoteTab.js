import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function NoteTab({noteName}) {
  const [btnState, setBtnState] = useState('unselected');

  function selectTab() {
    if(btnState === 'unselected') setBtnState('note-btn-selected')
    else setBtnState('unselected');
  }

  return (
    <Link to={`/note/1`}>
      <button onClick={selectTab} className='note-btn' id={`${btnState}`}>
        {noteName}
      </button>
    </Link>
  );
}

export default NoteTab;
