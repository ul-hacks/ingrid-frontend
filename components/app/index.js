import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import ExtensionModal from './Extensions';

function App ({ user }) {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('session') !== 'true') {
      Router.push('/signin');
    }
  });

  return (
    <>
      <Dashboard user={user} setOpenModal={setOpenModal}/>
      <ExtensionModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}

App.propTypes = {
  user: PropTypes.object.isRequired,
}

export default App;