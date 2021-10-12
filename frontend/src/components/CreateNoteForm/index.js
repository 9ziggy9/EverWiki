import React from "react";
import './CreateNoteForm.css'

function CreateNoteForm() {
  return (
    <div id='note-form-container'>
      <div id='note-form-editor'>
        <textarea>
        </textarea>
      </div>
      <div id='note-form-preview'>
      </div>
    </div>
  );
}

export default CreateNoteForm;
