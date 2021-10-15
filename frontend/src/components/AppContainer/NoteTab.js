import React, {useState, useEffect} from 'react';

function NoteTab({noteName}) {
  const [btnState, setBtnState] = useState('unselected');

  function selectTab() {
    if(btnState === 'unselected') setBtnState('note-btn-selected')
    else setBtnState('unselected');
  }

  return (
    <button onClick={selectTab} className='note-btn' id={`${btnState}`}>
      {noteName}
    </button>
  );
}

export default NoteTab;
