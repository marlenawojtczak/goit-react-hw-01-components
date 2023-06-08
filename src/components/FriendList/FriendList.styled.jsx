import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 7px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  width: 300px;
  padding: 10px 0;
  gap: 15px;
  background-color: #fff;
  box-shadow: 5px 5px 20px -18px rgba(66, 68, 90, 1);
  border: 1px solid #cfcfcf78;
  border-radius: 5px;
`;

export const Status = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 15px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: 500;
`;
