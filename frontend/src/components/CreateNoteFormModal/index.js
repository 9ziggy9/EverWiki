import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateNoteForm from '../CreateNoteForm';

function CreateNoteFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('hello world');
  const [title, setTitle] = useState('Untitled');

  return (
    <>
      <button onClick={() => setShowModal(true)}>create note</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateNoteForm
            setShowModal={setShowModal}
            text={text}
            setText={setText}
            title={title}
            setTitle={setTitle}
          />
        </Modal>
      )}
    </>
  );
}

export default CreateNoteFormModal;
