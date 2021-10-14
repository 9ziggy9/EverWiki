import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {parseStyle,splitOnNewLines,parseBullets} from '../../utilities/parser';

function NoteView() {
  const [noteContent, setNoteContent] = useState('');
  const sessionNote = useSelector((state) => state.session.note);

  useEffect(() => {
    console.log('hello from noteview');
    setNoteContent(
      parseBullets(splitOnNewLines(parseStyle(sessionNote.content))).join('')
    );
  }, [sessionNote])

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: noteContent}} />
    </>
  );
}

export default NoteView;
