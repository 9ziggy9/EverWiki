import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import './FileTree.css'
import { NavLink } from 'react-router-dom';

function FileTree() {
  const sessionUser = useSelector(state => state.session.user);
  const [showFileTree, setShowFileTree] = useState(true);

  if (sessionUser) (
    console.log(`Logged in as ${sessionUser}; hello from FileTree.`)
  );

  return (
    <div>
      { sessionUser && <h1>Hello from File Tree</h1> }
    </div>
  );
}

export default FileTree;
