import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../CreateNoteForm/CreateNoteForm.css'
import { NavLink } from 'react-router-dom';
import './TextEditor.css'

function TextEditor() {

  return (
    <div id='text-editor'>
      <textarea>
      </textarea>
    </div>
  );
}

export default TextEditor;
