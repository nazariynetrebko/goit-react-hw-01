import FriendListItem from './FriendsListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  if (!Array.isArray(friends)) {
    console.error('Friends is not an array:', friends);
    return null;
  }

  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
