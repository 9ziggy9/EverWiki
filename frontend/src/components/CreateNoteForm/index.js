import React from "react";
import './CreateNoteForm.css';
import TextEditor from '../TextEditor';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as sessionActions from '../../store/session'

function CreateNoteForm({btnName, setShowModal,
                  text, setText,
                  title, setTitle,
                  selectedNotebookId}) {
  const dispatch = useDispatch();
  const sessionNote = useSelector((state) => state.session.note);
  const [textStream, setTextStream] = useState('');
  const [noteId, setNoteId] = useState(sessionNote.id);

  function postNote() {
    return dispatch(sessionActions.newNote({
      title: title,
      content: text,
      notebookId: selectedNotebookId,
    }));
  }

  function editNote() {
    return dispatch(sessionActions.editNote({
      title: 'Tested successful',
      content: text,
      id: noteId,
    }));
  }

  function submitAndClose() {
    if (btnName === 'edit note') editNote()
    else postNote();
    setShowModal(false);
  }

  useEffect(() => {setNoteId(sessionNote.id)}, [sessionNote]);

  return (
    <>
      <div id='note-form-container'>
        <TextEditor text={text}
                    title={title}
                    setTitle={setTitle}
                    setText={setText}
                    textStream={textStream}
                    setTextStream={setTextStream} />
      </div>
        <div id="editor-buttons">
          <Link to={`/newNote/`}>
            <button id="post-button" onClick={() => submitAndClose()}>post</button>
          </Link>
          <button onClick={()=>console.log(sessionNote)}>dark mode</button>
          <button>vi mode</button>
          <button>help</button>
          <button>KaTeX help</button>
          <button>cancel</button>
        </div>
    </>
  );
}

export default CreateNoteForm;
