import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../CreateNoteForm/CreateNoteForm.css'
import { NavLink } from 'react-router-dom';
import './TextEditor.css'
import Editor from './Editor';
import Preview from './Preview';

function TextEditor() {

  return (
    <>
      <div id='text-editor'><Editor /></div>
      <div id='text-preview'><Preview /></div>
    </>
  );
}

export default TextEditor;
