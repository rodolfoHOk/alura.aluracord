import { transparentize } from 'polished';
import styled from 'styled-components';

export const MessageListWrapper = styled.ul`
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  color: ${(p) => p.theme.colors.neutrals['000']};
  margin-bottom: 16px;
`;

export const ListItem = styled.li`
  position: relative;
  border-radius: 5px;
  padding: 6px;
  margin-bottom: 12px;
  margin-right: 16px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${(p) =>
      transparentize(0.3, p.theme.colors.neutrals[500])};
  }
`;

export const AvatarImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`;

export const DataSpan = styled.data`
  font-size: 10px;
  margin-left: 8px;
  color: ${(p) => p.theme.colors.neutrals[300]};
`;
