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
    background-color: ${(p) => p.theme.colors.neutrals[700]};
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

export const DeleteButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: #00000000;
  border-color: ${(p) => p.theme.colors.neutrals[500]};
  color: ${(p) => p.theme.colors.neutrals['300']};
  font-size: 18px;
  text-decoration: none;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  outline: 0;
  transition: 0.2s ease-in-out;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(p) => p.theme.colors.neutrals[400]};
  }
`;
