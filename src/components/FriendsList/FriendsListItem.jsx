import clsx from 'clsx';
import './FriendsListItem.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend-card">
      <img src={avatar} alt={`${name}'s avatar`} width="48"></img>

      <p className="friend-name">{name}</p>
      <p className={clsx('status', { online: isOnline, offline: !isOnline })}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendsListItem;
