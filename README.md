<h1  align="center">Projeto-LabeCommerce</h1>

  

## Sobre esse projeto

  

O projeto LabeCommerce é uma API de comércio eletrônico desenvolvida em NodeJS utilizando TypeScript, Express, Knex e SQLite. A API possui diversas funcionalidades, como cadastrar e buscar usuários, cadastrar, buscar e editar produtos, cadastrar compras e buscar informações sobre compras específicas.

  

A base de dados é gerenciada pelo Knex, que utiliza o SQLite como banco de dados.

  

O projeto também conta com uma documentação clara e objetiva, que descreve as funcionalidades disponíveis e como utilizá-las. Isso torna o desenvolvimento e a integração com outras aplicações mais fácil e rápida.

  

Por fim, o LabeCommerce é um projeto completo e funcional que pode ser utilizado como base para o desenvolvimento de aplicações de comércio eletrônico em NodeJS.
## Funcionalidades
A coleção LabeCommerce no Postman é uma coleção de endpoints de API para gerenciar uma plataforma de comércio eletrônico. Esta coleção inclui endpoints para gerenciar usuários, produtos e compras. A seguir estão os detalhes dos endpoints nesta coleção:

-   **`Get All Users`**: este endpoint retorna todos os usuários cadastrados no sistema.
-   **`Create User`**: este endpoint cria um novo usuário na plataforma.
-   **`Create Product`**: este endpoint permite criar um novo produto na plataforma.
-   **`Get all products 1`**: este endpoint retorna todos os produtos disponíveis na plataforma.
-   **`Get all products 2 ( search product by name)`**: este endpoint retorna todos os produtos que correspondem ao nome do produto especificado.
-   **`Edit product by id`**: este endpoint permite atualizar as informações de um produto existente com base no ID do produto.
-   **`Create Purchase`**: este endpoint permite criar uma nova compra de um ou mais produtos.
-   **`Delete purchase by id`**: este endpoint permite excluir uma compra existente com base no ID da compra.
-   **`Get Purchase by id`**: este endpoint retorna informações sobre uma compra existente com base no ID da compra especificada.

Em resumo, a coleção LabeCommerce oferece uma gama completa de endpoints de API para gerenciar usuários, produtos e compras em uma plataforma de comércio eletrônico. Esses endpoints podem ser usados ​​por desenvolvedores e outras partes interessadas para interagir com a plataforma por meio de chamadas de API bem definidas.

A documentação completa está nesse link:
https://documenter.getpostman.com/view/26335727/2s93Y5Pf2Q

## Tecnologias utilizadas

  

- **NodeJS**: plataforma de desenvolvimento de software para construir aplicativos escaláveis ​​em JavaScript.

  

- **Typescript**: superset do JavaScript que adiciona tipos estáticos opcionais à linguagem.

  

- **Express**: framework de aplicativo para NodeJS que fornece uma camada abstrata para lidar com as solicitações HTTP.

  

- **SQL e SQLite**: linguagens de consulta estruturada e um banco de dados relacional embutido, respectivamente, usados ​​para gerenciar a persistência de dados do projeto.

  

- **Knex**: biblioteca de construção de consultas SQL para NodeJS que suporta vários bancos de dados.

  

- **Postman**: ambiente de desenvolvimento de API que permite testar APIs e criar solicitações HTTP.
  

## Instalação

  

Para instalar o projeto que utiliza NodeJS, Typescript, Express, SQL e SQLite, Knex e Postman, siga as seguintes etapas:

  

<b>Instalação do NodeJS</b>: faça o download do NodeJS em https://nodejs.org/en/download/ e instale-o seguindo as instruções do instalador.  
  

<b>Instalação do Typescript</b>: abra o terminal ou prompt de comando e digite o comando `npm install -g typescript`. Isso instalará o Typescript globalmente em sua máquina.

  

**Criação do projeto**: crie uma pasta para o projeto e abra o terminal ou prompt de comando na pasta criada. Em seguida, digite o comando `npm init -y`. Isso criará um arquivo package.json padrão na pasta do projeto.

  

**Instalação do Express e SQLite**: digite o comando `npm install express sqlite3 @types/express @types/sqlite3` no terminal ou prompt de comando na pasta do projeto.

  

**Instalação do Knex**: digite o comando `npm install knex @types/knex sqlite3` no terminal ou prompt de comando na pasta do projeto.  

**Configuração do Knex**: crie um arquivo knexfile.js na raiz do projeto com as configurações do banco de dados. Em seguida, crie um arquivo database.ts na pasta src com as configurações do Knex para acessar o banco de dados.  

**Instalação do Postman**: faça o download e instale o Postman em https://www.postman.com/downloads/.

## Implementações futuras
Nas proximas atualizações, iremos adicionar sistema de atutenticação (TOKEN) e a criação de codigos de ambiente seguro.
## Colaboradores
Acredito que todos aqueles que no decorrer do projeto me ajudaram ou pediram ajuda para desenvolvimento, meus agradecimentos:

**Arthur Felix**
**Jaziel Bury**
**Pedro Henrique**
**Pedro "PEDRINHOmsb#5828"**
**Felício de Souza**

## Status do projeto
Estará parado no momento. 



