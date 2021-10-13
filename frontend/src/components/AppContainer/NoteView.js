import React from 'react';

function NoteView({noteView}) {
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: noteView}} />
    </>
  );
}

export default NoteView;
