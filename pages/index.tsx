import appConfig from '../config.json';
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

export default function PaginaInicial() {
  const username = 'peas';

  return (
    <>
      <GlobalStyles />
      <PageBackground>
        <LoginContainer>
          {/* Formulário */}
          <Form>
            <Title
              level={2}
              style={{ color: appConfig.theme.colors.neutrals['000'] }}
            >
              Boas vindas de volta!
            </Title>
            <Paragraph
              size={3}
              style={{
                marginBottom: '32px',
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Paragraph>

            <TextInput />
            <FormButton type="submit">Entrar</FormButton>
          </Form>
          {/* Formulário */}

          {/* Photo Area */}
          <PhotoContainer>
            <Photo src={`https://github.com/${username}.png`} />
            <Paragraph
              size={4}
              style={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
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
    </>
  );
}
