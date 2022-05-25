import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const WarningMessage = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.light_black};

  margin-top: 100px;
`;
