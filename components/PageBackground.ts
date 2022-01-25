import styled from 'styled-components';

export const PageBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.primary[500]};
  background-image: url('https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
`;
