import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatList,
  Title,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import { getRandomColor } from './getRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      <Title>{title}</Title>
      <StatList>
        {stats.map(stat => (
          <Item key={stat.id} style={{ backgroundColor: getRandomColor() }}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistics;
