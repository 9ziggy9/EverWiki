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
  const [text, setText] = useState('hello world');
  return (
    <>
      <div id='text-editor'>
        <Editor text={text} setText={setText}/>
      </div>
      <div id='text-preview'>
        <Preview text={text}/>
      </div>
    </>
  );
}

export default TextEditor;
