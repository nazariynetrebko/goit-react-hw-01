import FriendList from './FriendsList';
import friends from './friendsData.json';

const AppFriendList = () => {
  return (
    <>
      <FriendList friends={friends} />
    </>
  );
};

export default AppFriendList;
