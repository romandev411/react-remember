import React, { Component } from 'react';
import { UserContext } from '../../context/UserContext';
import UserPage from '../../components/UserPage/UserPage';

class ProviderPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'name1',
    };
  }

  render () {
    return (
      <UserContext.Provider value={this.state.name}>
        <UserPage></UserPage>
      </UserContext.Provider>
    );
  }
}

export default ProviderPage;
