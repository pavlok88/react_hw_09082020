import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Counter from './react_components/counter/Counter.jsx';
import UserList from './react_components/user_card/UserList.jsx';
import usersData from './data/userData';
const usersData2 = [
  {
    id: 9,
    userPhoto:
      'https://robohash.org/evenietvelititaque.jpg?size=50x50&set=set1',
    firstName: 'Boyd',
    lastName: 'Pithie',
    comment: 'grow frictionless e-commerce',
  },
  {
    id: 10,
    userPhoto:
      'https://robohash.org/laudantiumconsequatureaque.jpg?size=50x50&set=set1',
    firstName: 'Lee',
    lastName: 'Benazet',
    comment: 'deliver global communities',
  },
];

function App() {
  return (
    <>
      <UserList data={usersData} />
      <UserList data={usersData2} title={'user list 2'} />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
