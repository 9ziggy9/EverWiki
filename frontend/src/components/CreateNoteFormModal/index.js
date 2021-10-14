import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateNoteForm from '../CreateNoteForm';

function CreateNoteFormModal({setNoteView}) {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('hello world');

  return (
    <>
      <button onClick={() => setShowModal(true)}>create note</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateNoteForm
            showModal={showModal}
            setShowModal={setShowModal}
            setNoteView={setNoteView}
            text={text}
            setText={setText}
          />
        </Modal>
      )}
    </>
  );
}

export default CreateNoteFormModal;
