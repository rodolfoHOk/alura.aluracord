import { transparentize } from 'polished';
import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 72px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  border-radius: 5px;
  background-color: ${(p) =>
    p.theme.name === 'Matrix'
      ? transparentize(0.06, p.theme.colors.neutrals[700])
      : transparentize(0.5, p.theme.colors.neutrals[700])};
  height: 100%;
  max-width: 95%;
  max-height: calc(95vh - 72px);
  padding: 32px;
`;

export const MessagesContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  height: 80%;
  background-color: ${(p) =>
    p.theme.name === 'Matrix'
      ? transparentize(0.5, p.theme.colors.neutrals[700])
      : transparentize(0.75, p.theme.colors.neutrals[700])};
  flex-direction: column;
  border-radius: 5px;
  padding: 16px;
`;
