import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateNoteForm from '../CreateNoteForm';
import {useSelector} from 'react-redux';

function CreateNoteFormModal({btnName, selectedNotebookId, selectedNoteId}) {
  const note = useSelector(state => state.session.note);
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [title, setTitle] = useState(note.title);

  const TEXT_EDITOR_SESSION = {
    showModal,
    setShowModal,
    text,
    setText,
    title,
    setTitle
  }

  const tutorial_text =
`
*A Brief Tutorial
Headers are defined with asterix.
*Header 1
**Header 2
***Header 3
****Header 4
*****Header 5

Font can be [i italic] or [b bold].

**LaTeX blocks can be inserted with [m]
[m \Gamma(s) = \int_{\mathbb{R_+} t^{s-1}e^{-t}\,ds}]

**Raw HTML is also possible.
<img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Gamma_plot.svg">
`

  function handleModal() {
    if(btnName === 'edit note') {
      setText(note.content);
      setTitle(note.title);
    } else {
      setText(tutorial_text);
      setTitle('Enter Title');
    }
    setShowModal(true);
  }

  return (
    <>
      <button onClick={() => handleModal()}>{btnName}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {btnName==='create note' && <CreateNoteForm
            TEXT_EDITOR_SESSION={TEXT_EDITOR_SESSION}
            btnName={btnName}
            selectedNotebookId={selectedNotebookId} />}
          {btnName==='edit note' && <CreateNoteForm
            TEXT_EDITOR_SESSION={TEXT_EDITOR_SESSION}
            btnName={btnName}
            selectedNoteId={selectedNoteId}/>}
        </Modal>
      )}
    </>
  );
}

export default CreateNoteFormModal;
