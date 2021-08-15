import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import ExtensionModal from './Extensions';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState({
    name: 'User',
    streak: 0,
    extensions: [],
  });

  useEffect(() => {
    if (localStorage.getItem('session') !== 'true') {
      Router.push('/signin');
    }
  });

  return (
    <>
      <Dashboard user={user} setOpenModal={setOpenModal} open={openModal} />
      <ExtensionModal openModal={openModal} user={user} setUser={setUser} setOpenModal={setOpenModal} />
    </>
  )
}

App.propTypes = {
}

export default App;