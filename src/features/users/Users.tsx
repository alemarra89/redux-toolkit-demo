import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import styles from '../counter/Counter.module.css';
import { addCustomUser, getUsers } from './redux/actions';
import { users } from './redux/selectors';
import { User } from './redux/types';

export function Users() {
  const usersList = useAppSelector(users);
  const dispatch = useAppDispatch();

  const getUsersAction = () => {
    dispatch(getUsers());
  }

  const customUser: User = {
    id: 11,
    name: 'Franco',
    address: {
        city: 'Otranto',
        geo: {
            lat: '10',
            lng: '40'
        },
        street: 'Via Roma',
        suite: 'Suite ?',
        zipcode: '73455'
    },
    company: {
        bs: 'BS ?',
        catchPhrase: 'Catch phrase ?',
        name: 'Links Management and Technology'
    },
    email: 'franco@ciccio.it',
    phone: '3339999999',
    username: 'francociccio',
    website: 'https://linksmt.it'

  }
  const addUserAction = () => {
    dispatch(addCustomUser(customUser));
  }

  return (
    <div>
        <div className={styles.row}>
            <p>test</p>
            <button onClick={getUsersAction}>Get users</button>
            <button onClick={addUserAction}>Add custom user</button>
        </div>
        <div>
            <p style={{fontSize: 10}}>{JSON.stringify(usersList)}</p>
        </div>
    </div>
  );
}

export default Users;
