# Aluracord

> Projeto da Imersão React 4 da @alura com @omariosouto e @peas

## 👨‍💻 Tecnologias utilizadas 👩‍💻

- Linguagem : Typescript / Javascript
- Framework : Next Js / React Js
- Biblioteca de estilização : Styled Components
- Autenticação : Oauth2 Authorization Code com Github
- Back-End As A Service : Supabase
- Api do Next Js : para manter a segurança do client_secret(Github) da aplicação
- Dados em tempo real : WebSocket com Supabase

### 🗃️ Bibliotecas adicionais utilizadas 📚

- @supabase/supabase-js : Client javascript do Supabase
- axios : HTTP client
- lodash.debounce : O método debounce da Biblioteca Lodash, para executar uma função somente depois de algum tempo sem o usuário digitar algo, evita multiplas requisições ao servidor.
- polished : Adiciona transparências nas cores principais de projeto (CSS)
- react-icons : ícones para ReactJs
- react-loading-skeleton : Componente React - Esqueletos de carregamento animados
- styled-components: Estilização dos componentes para React JS

## O que fiz além das aulas e dos desafios

- Typescript
- Migração para o Styled Components
- Autenticação Oauth2 Authorization Code do Github
- Utilização da Context Api do React para Autenticação
- Utilização da Api do Next Js para segurança da autenticação
- Dois temas para escolha com mensagens separadas para cada uma tema
- Utilização dos hooks e context do Styled Components para os temas

## 🐈‍⬛🐙 Oauth do Github

- Cadastrar aplicação no oauth do Github:
  - acessar : Perfil / Settings / Developer settings -> Oauth Apps -> New Oauth App
  - preencher formulário e cadastrar
  - Guardar o client_id
  - Gerar um novo client_secret e guardar rm local seguro
- Para evitar a exposição do client_secret: utilizei o environment variable e
  fiz a requisição do token através da api do next (Server Side).
- Adicionar os environment variables na página do projeto na Vercel.

## 🔒 Fluxo de Autenticação (Authorization code) 🔐

- Pedir autorização para o servidor de autenticação do Github passando o client_id e o escopo
- O servidor de autenticação pede para o usuário fazer o login na conta do GitHub
- O servidor de autenticação pede para o usuário autorizar o acesso aos dados públicos
  do Github
- O servidor de autenticação retorna para a url de callback cadastrada com um code nos
  parâmetros da url
- Pegamos este code e através da api do next fazemos a requisição do token passando
  no header da requisição o client_id o client_secret e o code no corpo da requisição
- O servidor de autenticação retorna o access_token no corpo da resposta
- Com o access_token pedimos a api do github os dados do usuário através da api do next
  passando o access_token
  no cabeçalho (header) da requisição
- A API do github retorna os dados públicos do usuário
- Nossa API do next retorna os dados do usuário e o token para a aplicação web
- Na aplicação web podemos guardar o token e os dados do usuário para utilizarmos
  conforme a necessidade.

## 🔥 Deployed URL 🔗

https://alura-aluracord-rodolfohok.vercel.app/
