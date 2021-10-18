import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {parseStyle,splitOnNewLines,parseBullets} from '../../utilities/parser';
import {useParams} from 'react-router-dom';
import DOMPurify from 'dompurify'; // ah ah ah, you didn't say the magic word
import {useDispatch} from 'react-redux';
import * as sessionActions from '../../store/session';


function NoteView() {
  const dispatch = useDispatch();
  const {noteId} = useParams();
  const [noteContent, setNoteContent] = useState('');
  const sessionNote = useSelector((state) => state.session.note);
  const sanitizer = DOMPurify.sanitize;

  const getNote = (id) => dispatch(sessionActions.grabNote(id));

  useEffect(() => {
    setNoteContent(
      parseBullets(splitOnNewLines(parseStyle(sessionNote.content))).join('')
    );
  }, [sessionNote])

  useEffect(() => {
    if(noteId) {
      const note = getNote(noteId);
      setNoteContent(
        parseBullets(splitOnNewLines(parseStyle(note.content))).join('')
      );
    }
  }, [noteId])

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: sanitizer(noteContent)}} />
    </>
  );
}

export default NoteView;
