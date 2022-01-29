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
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';
import { Button } from '../components/Button/Button';
import { useAuth } from '../context/useAuth';

export default function PaginaInicial() {
  const theme = useTheme();
  const router = useRouter();
  const { user, signIn, loading } = useAuth();
  const [username, setUsername] = useState('');
  const [userInput, setUserInput] = useState('');
  const [githubUser, setGithubUser] = useState(null);
  const [userInputError, setUserInputError] = useState('');

  async function fetchGithubUser() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userInfos = await response.json();
    if (!userInfos.message) {
      setGithubUser(userInfos);
    } else if (userInfos.message === 'Not Found') {
      console.error('Usuário não encontrado');
    } else {
      console.error('Erro ao tentar buscar dados do usuário');
    }
  }

  function changeUsername(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length > 1) {
      setUserInputError('');
      setUsername(event.target.value);
    } else {
      setUserInputError('Nome de usuário deve ter ao menos 2 caracteres');
    }
  }

  function enterWithGithub(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (user !== null && user !== undefined) {
      router.push('/chat');
    } else {
      signIn(username);
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
      <Form onSubmit={enterWithGithub}>
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
        {userInputError && (
          <Paragraph
            size={3}
            style={{
              color: '#db0000',
              alignSelf: 'flex-start',
              padding: '2px 4px',
            }}
          >
            {userInputError}
          </Paragraph>
        )}
        <Button
          type="submit"
          label="Entrar com Github"
          style={{ marginTop: 16 }}
        />
      </Form>
      {/* Formulário */}

      {/* Photo Area */}
      <PhotoContainer>
        <Photo
          src={
            !userInputError && username
              ? `https://github.com/${username}.png`
              : 'avatar.png'
          }
        />
        {username && (
          <Button
            size={'small'}
            type="button"
            onClick={fetchGithubUser}
            label={username}
          />
        )}
        {githubUser && (
          <UserInfos>
            <Paragraph size={4}>{githubUser.name}</Paragraph>
            <Paragraph size={4}>{githubUser.location}</Paragraph>
            <Paragraph size={4}>{githubUser.bio}</Paragraph>
          </UserInfos>
        )}
      </PhotoContainer>
      {/* Photo Area */}
    </LoginContainer>
  );
}
