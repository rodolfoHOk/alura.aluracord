import styled from 'styled-components';
import { transparentize } from 'polished';

export const TemaContainerWrapper = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  width: 190px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) =>
    p.theme.name === 'Matrix'
      ? transparentize(0.06, p.theme.colors.neutrals[700])
      : transparentize(0.5, p.theme.colors.neutrals[700])};
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    top: 8px;
    left: 16px;
  }
`;
