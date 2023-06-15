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
    <a href="endpoints">Endpoints</a>
  </li>
  <ul>
      <li>
        <a href="add-category">Adicionar Categoria</a>
      </li>
      <li>
        <a href="get-all-category">Buscar todas as categoria</a>
      </li>
      <li>
        <a href="remove-category">Remover uma categoria pelo id</a>
      </li>
      <li>
        <a href="get-all-games">Buscar todos os jogos</a>
      </li>
      <li>
        <a href="get-game-by-id">Buscar um jogo pelo id</a>
      </li>
      <li>
        <a href="add-game">Adicionar um jogo</a>
      </li>
      <li>
        <a href="update-game">Atualizar um jogo</a>
      </li>
      <li>
        <a href="delete-game">Deletar um jogo</a>
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

<h1 id="endpoints">Endpoints</h1>
<h2>Adicionar Categoria</h2>
<h3 id="add-category">POST: /categories</h3>
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

<h2 id="get-all-categories">Buscar todas as categoria</h2>
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
