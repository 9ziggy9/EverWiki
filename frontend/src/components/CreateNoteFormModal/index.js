import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateNoteForm from '../CreateNoteForm';

function CreateNoteFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>CLICK ME</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateNoteForm />
        </Modal>
      )}
    </>
  );
}

export default CreateNoteFormModal;
