import React from 'react';
import UserCard from './UserCard.jsx';

function UserList(props) {
  const { data, title = 'Users list' } = props;
  return (
    <div className="usersListConteiner">
      <h1>{title}</h1>
      <ul className="usersList">
        {data.map((user) => {
          return <UserCard userInfo={user} key={user.id} />;
        })}
      </ul>
    </div>
  );
}

export default UserList;
