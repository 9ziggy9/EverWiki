import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import './FileTree.css'
import { NavLink } from 'react-router-dom';

function FileTree() {
  const sessionUser = useSelector(state => state.session.user);
  if (sessionUser) (
    console.log(`Logged in as ${sessionUser}; hello from FileTree.`)
  );
  return (
    <>
    </>
  );
}

export default FileTree;
