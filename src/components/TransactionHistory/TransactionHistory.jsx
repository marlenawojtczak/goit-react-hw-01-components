import PropTypes from 'prop-types';
import {
  Table,
  Head,
  HeadRow,
  HeadCell,
  Body,
  BodyRow,
  BodyCell,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <HeadRow>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </HeadRow>
      </Head>

      <Body>
        {items.map(({ id, type, amount, currency }) => (
          <BodyRow key={id}>
            <BodyCell>{type}</BodyCell>
            <BodyCell>{amount}</BodyCell>
            <BodyCell>{currency}</BodyCell>
          </BodyRow>
        ))}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransactionHistory;
