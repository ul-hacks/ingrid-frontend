import React from 'react';
import Dashboard from './Dashboard';

function App () {
  return (
    <div>
      <Dashboard user={user}/>
    </div>
  )
}

App.propTypes = {
  user: PropTypes.object.isRequired,
}

export default App;