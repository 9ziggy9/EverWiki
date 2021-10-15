import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

function NotebookModal() {
  const [showModal, setShowModal] = useState(false);
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
            <form>
                <label>
                    Notebook Name
                    <input type="text" name="name" />
                    <input type="submit" name="submit" />
                </label>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default NotebookModal;
