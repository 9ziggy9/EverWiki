import React from "react";
import './CreateNoteForm.css';
import TextEditor from '../TextEditor';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import DOMPurify from 'dompurify'; //You didn't think I'd forget to sanitize that HTML, did you?
import * as sessionActions from '../../store/session'

function CreateNoteForm({TEXT_EDITOR_SESSION, btnName,
                  selectedNoteId,
                  selectedNotebookId}) {
  const {text, setText,
         title, setTitle,
         setShowModal} = TEXT_EDITOR_SESSION;
  const dispatch = useDispatch();
  const [textStream, setTextStream] = useState('');

  function postNote() {
    const cleanPost = DOMPurify.sanitize(text);
    console.log(cleanPost);
    return dispatch(sessionActions.newNote({
      title: title,
      content: cleanPost,
      notebookId: selectedNotebookId,
    }));
  }

  function editNote() {
    const cleanEdit = DOMPurify.sanitize(text);
    return dispatch(sessionActions.editNote({
      title: title,
      content: cleanEdit,
      id: selectedNoteId,
    }));
  }

  function submitAndClose() {
    if (btnName === 'edit note') editNote()
    else postNote();
    setShowModal(false);
  }

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
        </div>
    </>
  );
}

export default CreateNoteForm;
