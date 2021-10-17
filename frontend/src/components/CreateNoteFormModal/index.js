import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateNoteForm from '../CreateNoteForm';
import {useSelector} from 'react-redux';

function CreateNoteFormModal({btnName, selectedNotebookId}) {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('Enter Title');
  const note = useSelector(state => state.session.note);

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
            btnName={btnName}
            selectedNotebookId={selectedNotebookId}
            setShowModal={setShowModal}
            text={text}
            setText={setText}
            title={title}
            setTitle={setTitle} />}
          {btnName==='edit note' && <CreateNoteForm
            btnName={btnName}
            setShowModal={setShowModal}
            text={text}
            setText={setText}
            title={title}
            setTitle={setTitle} />}
        </Modal>
      )}
    </>
  );
}

export default CreateNoteFormModal;
