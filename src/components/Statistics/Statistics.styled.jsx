import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-family: 'Roboto Mono';
  max-width: 300px;
  border-radius: 2px;
  background-color: #fff;
`;

export const Title = styled.section`
  padding: 30px 0;
  font-size: larger;
  text-transform: uppercase;
`;

export const StatList = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Item = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  color: #fff;
  background-color: ${props => props.color};
`;

export const Label = styled.section`
  font-size: 12px;
  padding-bottom: 5px;
`;

export const Percentage = styled.section`
  font-size: 18px;
`;
