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

  function handleModal() {
    if(btnName === 'edit note')
      setText(note.content);
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
