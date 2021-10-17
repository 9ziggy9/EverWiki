import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateNoteForm from '../CreateNoteForm';
import {useSelector} from 'react-redux';

function CreateNoteFormModal({btnName}) {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('hello world');
  const [title, setTitle] = useState('Untitled');
  const note = useSelector(state => state.session.note);

  return (
    <>
      <button onClick={() => setShowModal(true)}>{btnName}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {btnName==='create note' && <CreateNoteForm
            setShowModal={setShowModal}
            text={text}
            setText={setText}
            title={title}
            setTitle={setTitle} />}
          {btnName==='edit note' && <CreateNoteForm
            setShowModal={setShowModal}
            text={note.content}
            setText={setText}
            title={note.title}
            setTitle={setTitle} />}
        </Modal>
      )}
    </>
  );
}

export default CreateNoteFormModal;
