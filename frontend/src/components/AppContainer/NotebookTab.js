import React, {useState} from 'react';
import NoteTab from './NoteTab';


function NotebookTab({notebookName}) {
  const [isExpanded, setIsExpanded] = useState(true);
  let noteTree;
  if(isExpanded) {
   noteTree = (
    <div className='collapsible-notes'>
        <NoteTab noteName={'Example Note'}/>
        <NoteTab noteName={'Example Note'}/>
        <NoteTab noteName={'Example Note'}/>
        <NoteTab noteName={'Example Note'}/>
        <NoteTab noteName={'Example Note'}/>
    </div>
   );
  }
  function expand() {
    if(isExpanded) setIsExpanded(false)
    else setIsExpanded(true);
  }
  return (
    <div className='notebook-node'>
      <button onClick={expand} className='notebook-btn'>
        {notebookName}
      </button>
      {isExpanded && noteTree}
    </div>
  );
}

export default NotebookTab;
