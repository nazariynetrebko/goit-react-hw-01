import FriendListItem from './FriendsListItem';
import './FriendList.css';

const FriendList = ({ friends }) => {
  if (!Array.isArray(friends)) {
    console.error('Friends is not an array:', friends);
    return null;
  }

  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          ></FriendListItem>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
