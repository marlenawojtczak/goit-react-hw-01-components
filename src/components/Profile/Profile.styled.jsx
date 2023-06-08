import styled from 'styled-components';

export const ProfileContainer = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  background-color: #fff;
  color: #9aa4b3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 0;
  margin: 0 auto;
  box-shadow: 10px 10px 15px -20px rgba(66, 68, 90, 1);
  border: 1px solid #cfcfcf78;
  border-radius: 5px;
  max-width: 300px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 40px 0;
`;

export const Avatar = styled.img`
  width: 90px;
  padding-bottom: 30px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 900;
  color: #000;
`;

export const Tag = styled.p``;

export const Location = styled.p``;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid #e9e8e8;
  padding: 15px;
  background-color: #f2f5f9;
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Quantity = styled.span`
  font-weight: 900;
  color: #000;
`;
