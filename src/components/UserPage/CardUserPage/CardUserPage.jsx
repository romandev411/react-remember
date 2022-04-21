import React from 'react';
import { UserContext } from '../../../context/UserContext';

const CardUserPage = () => {
  return (
    <UserContext.Consumer>
      {value => {
        return <h1 className='CardUserPage'>{value}</h1>;
      }}
    </UserContext.Consumer>
  );
};

export default CardUserPage;
