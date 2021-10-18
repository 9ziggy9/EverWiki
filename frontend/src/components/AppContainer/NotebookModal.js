import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import * as sessionActions from '../../store/session';
import {useDispatch, useSelector} from 'react-redux';

function NotebookModal() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('Untitled');
  const updateTitle = (e) => setTitle(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(sessionActions.addToLibrary({
      title,
      userId
    }));
    setShowModal(false);
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>create notebook</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div id="notebook-modal">
            <h1>Welcome to the Notebook Creator!</h1>
            <p>
              Choose the name of your notebook and it will be added to the file tree.
              Non-unique names will be accepted, so exercise discipline in choosing a title.
              Once you have created your notebook you can begin populating it by selecting it
              from the file tree and then clicking the <b>create note</b> button.
            </p>
            <p>
              If you choose to delete a notebook, be aware that all notes contained therein
              will be lost forever. Currently there is no way to transfer notes to a different
              notebook, however this functionality is under development.
            </p>
            <p>
              Please review the <i>tutorial</i> and <i>about</i> if you have any questions.
              Feel free to contact me on GitHub if you discover any bugs.
              Good luck!
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    Notebook Name
                    <input type="text" name="name"
                            value={title} onChange={updateTitle}/>
                </label>
                    <input type="submit" name="submit" />
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default NotebookModal;
