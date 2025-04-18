import userData from './components/Profile/userData.json';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendsList/FriendsList';
import friends from './components/FriendsList/friendsData.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactionsData.json';

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      ></Profile>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
