import React from "react";
import './CreateNoteForm.css';
import TextEditor from '../TextEditor';

function CreateNoteForm({showModal, setShowModal}) {
  return (
    <>
      <div id='note-form-container'>
        <TextEditor />
      </div>
      <button onClick={()=>setShowModal(false)}>test</button>
    </>
  );
}

export default CreateNoteForm;
