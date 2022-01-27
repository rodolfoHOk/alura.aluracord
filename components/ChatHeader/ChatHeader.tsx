import { HeaderWrapper, LogoutButton } from './ChatHeader.styles';
import { Title } from '../Typography/Title';
import { useTheme } from 'styled-components';

export function ChatHeader() {
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <Title level={5} style={{ color: theme.colors.neutrals['000'] }}>
        Chat
      </Title>
      <LogoutButton>Logout</LogoutButton>
    </HeaderWrapper>
  );
}
