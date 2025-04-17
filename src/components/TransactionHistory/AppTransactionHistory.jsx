import TransactionHistory from './TransactionHistory';
import transactions from './transactionsData.json';

const AppTransactionHistory = () => {
  return (
    <>
      <TransactionHistory items={transactions} />
    </>
  );
};

export default AppTransactionHistory;
