import { GlobalStyles } from '../styles/globalStyle';
import { Title } from '../components/Title';
import { Paragraph } from '../components/Paragraph';
import { PageBackground } from '../components/PageBackground';
import { PhotoContainer } from '../components/PhotoContainer';
import { Photo } from '../components/Photo';
import { LoginContainer } from '../components/LoginContainer';
import { Form } from '../components/Form';
import { TextInput } from '../components/TextInput';
import { FormButton } from '../components/FormButton';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function PaginaInicial() {
  const theme = useTheme();
  const router = useRouter();
  const [username, setUsername] = useState('rodolfoHOk');

  return (
    <PageBackground>
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

          <TextInput
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <FormButton type="submit">Entrar</FormButton>
        </Form>
        {/* Formulário */}

        {/* Photo Area */}
        <PhotoContainer>
          <Photo src={`https://github.com/${username}.png`} />
          <Paragraph
            size={4}
            style={{
              color: theme.colors.neutrals[200],
              backgroundColor: theme.colors.neutrals[900],
              padding: '3px 10px',
              borderRadius: '1000px',
            }}
          >
            {username}
          </Paragraph>
        </PhotoContainer>
        {/* Photo Area */}
      </LoginContainer>
    </PageBackground>
  );
}
