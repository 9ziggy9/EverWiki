import React from 'react';

function NoteTab({noteName}) {
  return (
    <button className='note-btn'>{noteName}</button>
  );
}

export default NoteTab;
