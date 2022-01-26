import { Title } from '../components/Title';
import { Paragraph } from '../components/Paragraph';
import { PhotoContainer } from '../components/PhotoContainer';
import { Photo } from '../components/Photo';
import { LoginContainer } from '../components/LoginContainer';
import { Form } from '../components/Form';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import { useTheme } from 'styled-components';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';
import { SmallButton } from '../components/SmallButton';
import { UserInfos } from '../components/UserInfos';

export default function PaginaInicial() {
  const theme = useTheme();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [userInput, setUserInput] = useState('');
  const [user, setUser] = useState(null);

  async function fetchGithubUser() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userInfos = await response.json();
    setUser(userInfos);
  }

  function changeUsername(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length > 1) {
      setUsername(event.target.value);
      setUser(null);
    }
  }

  const debouncedChangeUsername = debounce(changeUsername, 1500);

  function handleUserInput(event: ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
    debouncedChangeUsername(event);
  }

  return (
    <LoginContainer>
      {/* Formulário */}
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          router.push('/chat');
        }}
      >
        <Title level={2} style={{ color: theme.colors.neutrals['000'] }}>
          {theme.name == 'Matrix' ? 'Boas vindas de volta!' : 'Boas vindas!'}
        </Title>
        <Paragraph
          size={3}
          style={{
            marginTop: '8px',
            marginBottom: '32px',
            color: theme.colors.neutrals[300],
          }}
        >
          {`Aluracord - ${theme.name} (${username})`}
        </Paragraph>
        <TextInput value={userInput} onChange={handleUserInput} />
        <Button type="submit">Entrar</Button>
      </Form>
      {/* Formulário */}

      {/* Photo Area */}
      <PhotoContainer>
        <Photo
          src={
            username.length > 1
              ? `https://github.com/${username}.png`
              : 'avatar.png'
          }
        />
        {username.length > 1 && (
          <SmallButton type="button" onClick={fetchGithubUser}>
            {username}
          </SmallButton>
        )}
        {user != null && (
          <UserInfos>
            <Paragraph size={4}>{user.name}</Paragraph>
            <Paragraph size={4}>{user.location}</Paragraph>
            <Paragraph size={4}>{user.bio}</Paragraph>
          </UserInfos>
        )}
      </PhotoContainer>
      {/* Photo Area */}
    </LoginContainer>
  );
}
