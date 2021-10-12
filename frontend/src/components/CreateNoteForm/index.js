import React from "react";
import './CreateNoteForm.css';
import TextEditor from '../TextEditor';

function CreateNoteForm() {
  return (
    <div id='note-form-container'>
      <div id='note-form-editor'>
        <TextEditor />
      </div>
      <div id='note-form-preview'>
      </div>
    </div>
  );
}

export default CreateNoteForm;
