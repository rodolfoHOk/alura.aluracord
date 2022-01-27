import {
  LoginContainer,
  Form,
  TextInput,
  PhotoContainer,
  Photo,
  UserInfos,
} from '../components/styles/Login.styles';
import { Title } from '../components/Typography/Title';
import { Paragraph } from '../components/Typography/Paragraph';
import { useTheme } from 'styled-components';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';
import { Button } from '../components/Button/Button';

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
            color:
              theme.name == 'Matrix'
                ? theme.colors.neutrals[300]
                : theme.colors.neutrals['050'],
          }}
        >
          {`Aluracord - ${theme.name} (${username})`}
        </Paragraph>
        <TextInput value={userInput} onChange={handleUserInput} />
        <Button type="submit" label="Entrar" />
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
          <Button
            size={'small'}
            type="button"
            onClick={fetchGithubUser}
            label={username}
          />
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
