import React from 'react';
import {parseStyle,splitOnNewLines,parseBullets} from '../../utilities/parser';

function NoteView({noteView}) {
  const parsedText = parseBullets(splitOnNewLines(parseStyle(noteView))).join('');
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: parsedText}} />
    </>
  );
}

export default NoteView;
