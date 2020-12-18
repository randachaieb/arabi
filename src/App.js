import React from 'react';
import './App.css';
import './style.css';

import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

class App extends React.Component {
  render(){
  return (

    <div>
      
      <ProfilePhoto />
      <FullName />
      <Address/>
      
    </div>
  );
}
}

export default App;
