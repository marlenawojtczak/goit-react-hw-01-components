import styled from 'styled-components';

export const Table = styled.table`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #cfcfcf78;
  box-shadow: 10px 10px 15px -20px rgba(66, 68, 90, 1);
  font-family: 'Roboto Mono';
  font-size: 12px;
  font-weight: 300;
`;

export const Head = styled.thead`
  color: #fff;
  background-color: #00bcd5;
  text-transform: uppercase;
`;

export const HeadRow = styled.tr`
  display: flex;
`;

export const HeadCell = styled.th`
  flex: 1;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  border-right: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.tbody``;

export const BodyRow = styled.tr`
  display: flex;
  border-top: 1px solid #ecf1f4;

  &:nth-child(odd) {
    background-color: #fff;
  }
`;

export const BodyCell = styled.td`
  flex: 1;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cfcfcf78;
`;
