import styled from 'styled-components';

export const PageBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.primary[500]};
  background-image: url(${(p) => p.theme.bg.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: ${(p) =>
    p.theme.name == 'matrix' ? 'multiply' : 'none'};
`;
