import css from './TransactionHistory.module.css';
import {
  FaFileInvoice,
  FaMoneyBill,
  FaArrowDown,
  FaArrowUp,
} from 'react-icons/fa';

const getIcon = (type) => {
  switch (type.toLowerCase()) {
    case 'invoice':
      return <FaFileInvoice />;
    case 'payment':
      return <FaMoneyBill />;
    case 'withdrawal':
      return <FaArrowDown />;
    case 'deposit':
      return <FaArrowUp />;
    default:
      return null;
  }
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const TransactionHistory = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>Немає транзакцій для відображення.</p>;
  }

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id} className={css.tr}>
            <td className={css.typeCell}>
              {getIcon(transaction.type)}
              {capitalize(transaction.type)}
            </td>
            <td className={css.td}>{transaction.amount}</td>
            <td className={css.td}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
