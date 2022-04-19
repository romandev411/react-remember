import React, { Component } from 'react';
import { getUsers } from '../../api';
import CardList from './CardList/CardList';

class Userslist extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      users: null,
      page: 1,
    };
  }

  componentDidMount () {
    this.load();
  }

  load = () => {
    this.setState({
      loading: true,
    });

    getUsers({ page: this.state.page })
      .then(data => {
        this.setState({
          users: data.results,
        });
      })
      .catch(() => {
        this.setState({
          error: true,
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };

  nextPage = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  prevPage = () => {
    this.setState(({ page }) => {
      return {
        page: page - 1,
      };
    });
  };

  componentDidUpdate (prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.load();
    }
  }

  render () {
    const { loading, error, users } = this.state;

    return (
      <div>
        {loading && <div>Loading...</div>}

        {error && <div>error</div>}

        {users && users.length && <CardList usersList={users} />}

        <button onClick={this.nextPage}>next</button>
        <button onClick={this.prevPage}>prev</button>
      </div>
    );
  }
}

export default Userslist;
