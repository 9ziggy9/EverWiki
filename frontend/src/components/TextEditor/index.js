import React, { useState } from 'react';
import '../CreateNoteForm/CreateNoteForm.css'
import './TextEditor.css'
import Editor from './Editor';
import Preview from './Preview';

function TextEditor({text,setText,textStream,setTextStream}) {
  return (
    <>
      <div id='text-editor'>
        <Editor
          text={text}
          setText={setText}
          textStream={textStream}
          setTextStream={setTextStream}
        />
      </div>
      <div id='text-preview'>
        <Preview text={text} textStream={textStream}/>
      </div>
    </>
  );
}

export default TextEditor;
