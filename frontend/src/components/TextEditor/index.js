import React, { useEffect } from 'react';
import '../CreateNoteForm/CreateNoteForm.css'
import './TextEditor.css'
import Editor from './Editor';
import Preview from './Preview';
import {parseStyle,splitOnNewLines,parseBullets} from '../../utilities/parser';

function TextEditor({text,setText,textStream,setTextStream}) {

  useEffect(() => {
    setTextStream(parseBullets(splitOnNewLines(parseStyle(text))).join(''));
  }, [text, setTextStream]);

  return (
    <>
      <div id='text-editor'>
        <Editor text={text} setText={setText} />
      </div>
      <div id='text-preview'>
        <Preview textStream={textStream} />
      </div>
    </>
  );
}

export default TextEditor;
