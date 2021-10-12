import React from "react";
import './CreateNoteForm.css';
import TextEditor from '../TextEditor';

function CreateNoteForm() {
  return (
    <div id='note-form-container'>
        <TextEditor />
    </div>
  );
}

export default CreateNoteForm;
