<h1>Bem vindos ao projeto Games Library API</h1>

<h1>Sumário</h1>

<ul>
  <li>
    <a href="#objectives">Objetivos</a>
  </li>
  <li>
    <a href="#tecnologies">Tecnologias</a>
  </li>
  <li>
    <a href="#deploy">Deploy</a>
  </li>
  <li>
    <a href="#endpoints">Endpoints</a>
  </li>
  <ul>
      <li>
        <a href="#add-category">Adicionar Categoria</a>
      </li>
      <li>
        <a href="#get-all-category">Buscar todas as categoria</a>
      </li>
      <li>
        <a href="#remove-category">Remover uma categoria pelo id</a>
      </li>
      <li>
        <a href="#get-all-games">Buscar todos os jogos</a>
      </li>
      <li>
        <a href="#get-game-by-id">Buscar um jogo pelo id</a>
      </li>
      <li>
        <a href="#add-game">Adicionar um jogo</a>
      </li>
      <li>
        <a href="#update-game">Atualizar um jogo</a>
      </li>
      <li>
        <a href="#delete-game">Deletar um jogo</a>
      </li>
    </ul>
    <li><a href="contacts">Contatos</a></li>
</ul>

<h1 id="objectives">Objetivos</h1>
<p>Esse projeto consiste em uma api para armazenar e buscar dados sobre jogos cadastrados por usuários em um banco de dados (MongoDB).</p>

<h1 id="tecnologies">Tecnologias</h1>
<p>Para desenvolver esse projeto utilizei as seguintes tecnologias:</p>
<ul>
  <li><a href="https://expressjs.com/pt-br/" target="_blank">Express</a></li>
  <li><a href="https://www.npmjs.com/package/dotenv" target="_blank">DotEnv</a></li>
  <li><a href="https://www.npmjs.com/package/http-status-codes" target="_blank">http-status-codes</a></li>
  <li><a href="https://joi.dev/" target="_blank">Joi</a></li>
  <li><a href="https://www.mongodb.com/" target="_blank">MongoDB</a></li>
  <li><a href="https://nodemon.io/" target="_blank">Nodemon</a></li>
</ul>

<h1 id="deploy">Deploy</h1>
<p>A api foi publicada no <a href="https://render.com/" target="_blank">Render</a> um serviço de hospedagem para static sites e web services.</p>
<p>A api pode ser acessada por esse link <a href="https://games-library-api.onrender.com" target="_blank">Games Library API</a></p>

<h1 id="endpoints">Endpoints</h1>
<h2 id="add-category">Adicionar Categoria</h2>
<h3>POST: /categories</h3>
<hr />
<p>Adiciona uma nova categoria</p>
<p>Exemplo de body</p>
<pre>
  {
    "category": "Nome da categoria"
  }
</pre>
<hr />
<p>Exmeplos de respostas:</p>
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 400 BAD REQUEST</p>
<pre>
  {
    "message": "A categoria "{category}" já existe!"
  }
</pre>
<hr />
<p>Status: 400 BAD REQUEST</p>
<pre>
  {
    "message": "Algum erro de validação"
  }
</pre>
<hr />
<p>Status: 201 CREATED</p>
<pre>
  {
    "categoryAdded": {
      "_id": "Id da categoria",
      "category": "Nome da categoria"
    }
  }
</pre>

<hr />

<h2 id="get-all-category">Buscar todas as categoria</h2>
<h3>GET: /categories</h3>
<hr />
<p>Lista todas as categorias</p>
<hr />
<p>Exemplos de respostas</p>
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 404 NOT FOUND</p>
<pre>
  {
    "message": "Nenhuma categoria encontrada!"
  }
</pre>
<hr />
<p>Status: 200 OK</p>
<pre>
  {
    categories: [
      {
        "_id": "Id da categoria 1",
        "category": "Nome da categoria 1"
      },
      {
        "_id": "Id da categoria 2",
        "category": "Nome da categoria 2"
      }
    ]
  }
</pre>

<hr />

<h2 id="remove-category">Remover uma categoria pelo id</h2>
<h3>DELETE: /categories/:id</h3>
<hr />
<p>Delete uma categoria pelo seu id</p>
<hr />
<p>Exemplos de respostas</p>
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 404 NOT FOUND</p>
<pre>
  {
    "message": "Categoria não encontrada!"
  }
</pre>
<hr />
<p>Status: 503 SERVICE UNAVAILABLE</p>
<hr />
<pre>
  {
    "message": "Não foi possível deletar essa categoria!"
  }
</pre>
<p>Status: 204 NO CONTENT</p>

<hr />

<h2 id="get-all-games">Buscar todos os jogos</h2>
<h3>GET: /games</h3>
<hr />
<p>Lista todos os jogos</p>
<hr />
<p>Exemplos de respostas</p>
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 404 NOT FOUND</p>
<pre>
  {
    "message": "Nenhum jogo encontrado!"
  }
</pre>
<hr />
<p>Status: 200 OK</p>
<pre>
  {
    "games": [
      {
        "_id": "Id do jogo",
        "title": "O título do jogo",
        "sinopse": "A sinopse do jogo",
        "developer": "A desenvolvedora do jogo",
        "publisher": "A publicadora do jogo",
        "releaseYear": "O ano de lançamento do jogo",
        "platforms": [
          "Plataformas do jogo",
        ],
        "trailerURL": "A url do trailer do jogo",
        "metacritic": {
          "metascore": "A nota metascore do metacritic",
          "userscore": "A nota userscore do metacritic",
        },
        "image": "A url da imagem do jogo",
        "backdrop": "A url da imagem de backdrop do jogo",
        "category": "A categoria do jogo"
      },
      ...
    ]
  }
</pre>

<hr />

<h2 id="get-game-by-id">Buscar um jogo pelo id</h2>
<h3>GET: /games/:id</h3>
<hr />
<p>Lista um jogo pelo sei id</p>
<hr />
<p>Exemplos de respostas</p>
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 404 NOT FOUND</p>
<pre>
  {
    "message": "Jogo não encontrado!"
  }
</pre>
<hr />
<p>Status: 200 OK</p>
<pre>
  {
    "game": {
      "_id": "Id do jogo",
      "title": "O título do jogo",
      "sinopse": "A sinopse do jogo",
      "developer": "A desenvolvedora do jogo",
      "publisher": "A publicadora do jogo",
      "releaseYear": "O ano de lançamento do jogo",
      "platforms": [
        "Plataformas do jogo",
      ],
      "trailerURL": "A url do trailer do jogo",
      "metacritic": {
        "metascore": "A nota metascore do metacritic",
        "userscore": "A nota userscore do metacritic",
      },
      "image": "A url da imagem do jogo",
      "backdrop": "A url da imagem de backdrop do jogo",
      "category": "A categoria do jogo"
    }
  }
</pre>

<hr />

<h2 id="add-game">Adicionar um jogo</h2>
<h3>POST: /games</h3>
<hr />
<p>Adiciona um novo jogo na biblioteca</p>
<hr />
<h3>NOTA:</h3>
<p>Para adicionar um jogo, a categoria precisa já existir na biblioteca, caso não exista adicione-a primeiro!</p>
<hr />
<p>Exemplo de body;</p>
<pre>
  {
    "_id": "Id do jogo", | necessário
    "title": "O título do jogo", | necessário
    "sinopse": "A sinopse do jogo", | necessário
    "developer": "A desenvolvedora do jogo", | necessário
    "publisher": "A publicadora do jogo", | necessário
    "releaseYear": "O ano de lançamento do jogo", | necessário
    "platforms": [
      "Plataformas do jogo", | necessário
    ],
    "trailerURL": "A url do trailer do jogo", | necessário
    "metacritic": {
      "metascore": "A nota metascore do metacritic", | necessário
      "userscore": "A nota userscore do metacritic", | necessário
    },
    "image": "A url da imagem do jogo" | necessário,
    "backdrop": "A url da imagem de backdrop do jogo", | necessário
    "category": "A categoria do jogo" | necessário
  }
</pre>
<hr />
<p>Exemplos de respostas</p>
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 400 BAD REQUEST</p>
<pre>
  {
    "message": "Algum erro de validação"
  }
</pre>
<hr />
<p>Status: 400 BAD REQUEST</p>
<pre>
  {
    "message": "Essa categoria não existe! Por favor, crie ela primeiro antes de adicionar o jogo"
  }
</pre>
<hr />
<p>Status: 201 CREATED</p>
<pre>
  {
    "gameAdded": {
      "_id": "Id do jogo",
      "title": "O título do jogo",
      "sinopse": "A sinopse do jogo",
      "developer": "A desenvolvedora do jogo",
      "publisher": "A publicadora do jogo",
      "releaseYear": "O ano de lançamento do jogo",
      "platforms": [
        "Plataformas do jogo",
      ],
      "trailerURL": "A url do trailer do jogo",
      "metacritic": {
        "metascore": "A nota metascore do metacritic",
        "userscore": "A nota userscore do metacritic",
      },
      "image": "A url da imagem do jogo",
      "backdrop": "A url da imagem de backdrop do jogo",
      "category": "A categoria do jogo"
    }
  }
</pre>

<hr />

<h2 id="update-game">Atualizar um jogo</h2>
<h3>PUT: /games/:id</h3>
<hr />
<p>Atualiza um jogo identificado pelo seu id</p>
<hr />
<p>Exemplo de body</p>
<pre>
  {
    "_id": "Id do jogo", | opcional
    "title": "O título do jogo", | opcional
    "sinopse": "A sinopse do jogo", | opcional
    "developer": "A desenvolvedora do jogo", | opcional
    "publisher": "A publicadora do jogo", | opcional
    "releaseYear": "O ano de lançamento do jogo", | opcional
    "platforms": [
      "Plataformas do jogo", | opcional
    ],
    "trailerURL": "A url do trailer do jogo", | opcional
    "metacritic": {
      "metascore": "A nota metascore do metacritic", | opcional
      "userscore": "A nota userscore do metacritic", | opcional
    },
    "image": "A url da imagem do jogo", | opcional
    "backdrop": "A url da imagem de backdrop do jogo", | opcional
    "category": "A categoria do jogo" | opcional
  }
</pre>
<hr />
<p>Exemplos de respostas</p>
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 400 BAD REQUEST</p>
<pre>
  {
    "message": "Algum erro de validação"
  }
</pre>
<hr />
<p>Status: 400 BAD REQUEST</p>
<pre>
  {
    "message": "Esse jogo não existe!"
  }
</pre>
<hr />
<p>Status: 503 SERVICE UNAVAILABLE</p>
<pre>
  {
    "message": "Não foi possível atualizar o jogo, por favor tente mais tarde!"
  }
</pre>
<hr />
<p>Status: 204 NO CONTENT</p>

<hr />

<h2 id="delete-game">Deletar um jogo</h2>
<h3>DELETE: /games/:id</h3>
<hr />
<p>Deleta um jogo identificado pelo seu id</p>
<hr />
<p>Exemplos de respostas</p>
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 404 NOT FOUND</p>
<pre>
  {
    "message": "Jogo não encontrado!"
  }
</pre>
<hr />
<p>Status: 503 SERVICE UNAVAILABLE</p>
<pre>
  {
    "message": "Não foi possível deletar esse jogo"
  }
</pre>
<hr />
<p>Status: 204 NO CONTENT</p>
