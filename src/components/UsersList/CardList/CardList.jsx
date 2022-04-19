import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../UserCard/UserCard';
import style from './Cardlist.module.scss';
import cx from 'classnames';

const Cardlist = ({ usersList }) => {
  return (
    <div className={cx(style.card)}>
      <ul className={cx(style['card-list__wrap'])}>
        {usersList.map(el => {
          return (
            <li key={el.email}>
              <UserCard users={el} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Cardlist.propTypes = {
  usersList: PropTypes.array,
};

export default Cardlist;
