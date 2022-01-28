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

export const DataSpan = styled.span`
  font-size: 10px;
  margin-left: 8px;
  color: ${(p) =>
    p.theme.name === 'Matrix'
      ? p.theme.colors.neutrals[300]
      : p.theme.colors.neutrals[100]};
`;

export const UserInfo = styled.div`
  position: absolute;
  right: 96px;
  top: 16px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${(p) => transparentize(0.2, p.theme.colors.neutrals[800])};

  @media screen and (max-width: 768px) {
    right: 32px;
  }
`;

export const LoadingUserInfo = styled.div`
  position: absolute;
  right: 96px;
  top: 16px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${(p) => transparentize(0.2, p.theme.colors.neutrals[800])};

  @media screen and (max-width: 768px) {
    right: 32px;
  }
`;

export const Photo = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 16px;
`;
