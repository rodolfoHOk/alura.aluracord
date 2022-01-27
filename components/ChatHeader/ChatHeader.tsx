import { HeaderWrapper } from './ChatHeader.styles';
import { Title } from '../Typography/Title';
import { useTheme } from 'styled-components';
import { Button } from '../Button/Button';
import { FaSignOutAlt } from 'react-icons/fa';

export function ChatHeader() {
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <Title level={5} style={{ color: theme.colors.neutrals['000'] }}>
        Chat
      </Title>
      <Button
        variant={'transparent'}
        label={
          <>
            <FaSignOutAlt />
            <span style={{ marginLeft: '4px', marginTop: '-1px' }}>Logout</span>
          </>
        }
      />
    </HeaderWrapper>
  );
}
