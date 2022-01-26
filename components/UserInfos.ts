import styled from 'styled-components';

export const UserInfos = styled.div`
  margin-top: 8px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 6px;
  color: ${(p) => p.theme.colors.neutrals[100]};
`;
