import React from 'react';
import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import * as sessionActions from './store/session';
import AppContainer from './components/AppContainer';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(0);
  const [selectedNotebookId, setSelectedNotebookId] = useState(0);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <AppContainer isLoaded={isLoaded}
                    setSelectedNoteId={setSelectedNoteId}
                    setSelectedNotebokId={setSelectedNotebookId} />
    </>
  );
}

export default App;
