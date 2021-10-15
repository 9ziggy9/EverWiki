import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {parseStyle,splitOnNewLines,parseBullets} from '../../utilities/parser';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as sessionActions from '../../store/session';


function NoteView() {
  const dispatch = useDispatch();
  const {noteId} = useParams();
  const [noteContent, setNoteContent] = useState('');
  const sessionNote = useSelector((state) => state.session.note);

  const getNote = (id) => dispatch(sessionActions.grabNote(id));

  useEffect(() => {
    setNoteContent(
      parseBullets(splitOnNewLines(parseStyle(sessionNote.content))).join('')
    );
  }, [sessionNote])

  useEffect(() => {
      const note = getNote(noteId);
      setNoteContent(
        parseBullets(splitOnNewLines(parseStyle(note.content))).join('')
      );
  }, [noteId])

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: noteContent}} />
    </>
  );
}

export default NoteView;
