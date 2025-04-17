import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppProfile from './components/Profile/AppProfile.jsx';
import AppFriendList from './components/FriendsList/AppFriendList.jsx';
import AppTransactionHistory from './components/TransactionHistory/AppTransactionHistory.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProfile />
    <AppFriendList />
    <AppTransactionHistory />
  </StrictMode>,
);
