import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  margin: 0 auto;
  width: 70%;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  font-size: ${({ theme }) => theme.fontSize.textSecondary};
`;
