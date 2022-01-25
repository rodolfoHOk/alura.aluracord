import styled from 'styled-components';

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  padding: 16px;
  background-color: ${(p) => p.theme.colors.neutrals[800]};
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.neutrals[999]};
  border-radius: 10px;
  flex: 1;
  min-height: 240px;
`;
