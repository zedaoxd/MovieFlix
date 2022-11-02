# MovieFlix

## Visão geral do sistema MovieFlix

O sistema MovieFlix consiste em um banco de filmes, os quais podem ser listados e avaliados pelos usuários. Usuários podem ser visitantes (VISITOR) e membros (MEMBER). Apenas usuários membros podem inserir avaliações no sistema.

Ao acessar o sistema, o usuário deve fazer seu login. Apenas usuários logados podem navegar nos filmes. Logo após fazer o login, o usuário vai para a listagem de filmes, que mostra os filmes de forma paginada, ordenados alfabeticamente por título. O usuário pode filtrar os filmes por gênero.

Ao selecionar um filme da listagem, é mostrada uma página de detalhes, onde é possível ver todas informações do filme, e também suas avaliações. Se o usuário for MEMBER, ele pode ainda registrar uma avaliação nessa tela.

Um usuário possui nome, email e senha, sendo que o email é seu nome de usuário. Cada filme possui um título, subtítulo, uma imagem, ano de lançamento, sinopse, e um gênero. Os usuários membros podem registrar avaliações para os filmes. Um mesmo usuário membro pode deixar mais de uma avaliação para o mesmo filme.

## Casos de uso
- **Efetuar login**
  1. [IN] O usuário anônimo informa seu email e senha
  2. [OUT] O sistema informa um token válido
- **Listar filmes**
  1. [OUT] O sistema apresenta uma listagem dos nomes de todos gêneros, bem como uma listagem paginada com título, subtítulo, ano e imagem dos filmes, ordenada alfabeticamente por título.
  2. [IN] O usuário visitante ou membro seleciona, opcionalmente, um gênero.
  3. [OUT] O sistema apresenta a listagem atualizada, restringindo somente ao gênero selecionado.
- **Visualizar detalhes do filme**
  1. [IN] O usuário visitante ou membro seleciona um filme
  2. [OUT] O sistema informa título, subtítulo, ano, imagem e sinopse do filme, e também uma listagem dos textos das avaliações daquele filme juntamente com nome do usuário que fez cada avaliação.
  3. [IN] O usuário membro informa, opcionalmente, um texto para avaliação do filme.
  4. [OUT] O sistema apresenta os dados atualizados, já aparecendo também a avaliação feita pelo usuário.

Exceção - Texto vazio - O sistema apresenta uma mensagem de que não é permitido texto vazio na avaliação

## Modelo Conceitual
![Modelo Conceitual](https://user-images.githubusercontent.com/55067151/194101985-200e199a-c9e0-4705-8eb8-fdc050ab4886.png)


## Layout desktop
<div styles={height: 1080px}>
  <img src="https://user-images.githubusercontent.com/55067151/197829678-1b0f1631-6aad-4d4c-aaeb-be31fa9c7a7c.png" alt="layout mobile main" />
  <img src="https://user-images.githubusercontent.com/55067151/198893865-23e5ab11-650d-46f4-a5c3-b92dd3fdcce1.png" alt="layout mobile main" />
  <img src="https://user-images.githubusercontent.com/55067151/198893863-775aa8fe-aa10-4b7c-9fd7-86806a5c51c3.png" alt="layout mobile main" />
</div>



## Layout mobile
<div styles={width: 100%}>
  <img src="https://user-images.githubusercontent.com/55067151/197829676-98c06afe-a79a-4a1a-b5e3-cb886198f157.png" alt="layout mobile main" width="33%" />
  <img src="https://user-images.githubusercontent.com/55067151/198893942-cf550562-be7a-4ebc-8322-2765d734253b.png" alt="layout mobile movies" width="33%" />
  <img src="https://user-images.githubusercontent.com/55067151/198893939-ae8f0ac3-e27e-4331-8e04-fa6afc4b0140.png" alt="layout mobile reviews" width="33%" />
</div>



## Tecnologias utilizadas
### Backend
- Java 17
- Spring Boot
- JPA / Hibernate
- Maven

### Frontend
- JavaScript
- TypeScript
- ReactJS

## Como executar o projeto

### Pré-requisitos backend
- java 17
- maven

### Pré-requisitos frontend 
- node 14
- yarn 1.22


### Clone o projeto
```bash
# clonar repositório
git clone https://github.com/zedaoxd/MovieFlix.git

# Frontend
# entre na pasta
cd MovieFlix/frontend

# instale as dependencias com o comando
yarn

# rode com o comando
yarn start

# Backend
# entre na pasta
cd MovieFlix/backend

# rode com o comando
mvn spring-boot:run


```

## Autor

[Bruno Lessa Ferraz](https://www.linkedin.com/in/bruno-lessa-ferraz/)

