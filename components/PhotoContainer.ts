import styled from 'styled-components';
import { transparentize } from 'polished';

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  padding: 16px;
  background-color: ${(p) => transparentize(0.5, p.theme.colors.neutrals[800])};
  border: 1px solid;
  border-color: ${(p) => transparentize(0.75, p.theme.colors.neutrals[999])};
  border-radius: 24px 8px;
  flex: 1;
  min-height: 240px;
`;
