import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import ExtensionModal from './Extensions';

function App ({ user }) {
  const [openModal, setOpenModal] = useState(false);
  console.log('LOOOL', setOpenModal);

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