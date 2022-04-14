import React, { Component } from 'react';

class Userslist extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      users: null
    };
  }

  componentDidMount () {
    fetch('https://randomuser.me/api/')
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({
          users: data.results
        });
      })
      .catch(() => {
        this.setState({
          error: true
        });
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      });
  }

  render () {
    const { loading, error, users } = this.state;

    return (
      <div>
        {loading ? <div>Loading...</div> : null}

        {error ? <div>error</div> : null}

        {users && users.length ? (
          <ul>
            {users.map(el => {
              return <li key={el.id}>{el.name.first}</li>;
            })}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Userslist;
