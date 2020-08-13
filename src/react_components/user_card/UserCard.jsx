import React from 'react';

function getDate() {
  const today = new Date();
  return `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
}

function UserCard(props) {
  const { userInfo } = props;
  return (
    <li className="userCard">
      <img src={userInfo.userPhoto} alt={userInfo.firstName} />
      <div>
        <p className='userName'>
          {userInfo.firstName} {userInfo.lastName}
        </p>
        <p className='userComment'>{userInfo.comment}</p>
      </div>

      <div>{getDate()}</div>
    </li>
  );
}

export default UserCard;
