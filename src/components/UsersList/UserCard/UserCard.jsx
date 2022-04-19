import React from 'react';
import PropTypes from 'prop-types';

const Usercard = ({ users }) => {
  return (
    <div>
      <img src={users.picture.medium} alt='avatar' />

      <h3>
        {users.name.first} {users.name.last}
      </h3>

      <p>{users.email}</p>
    </div>
  );
};

Usercard.propTypes = {
  usersList: PropTypes.object,
};

export default Usercard;
