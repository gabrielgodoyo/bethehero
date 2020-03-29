/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) => request.query
 * Route params: Parâmetros utilizados para identificar recursos => request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos => request.body
 */

/**
 * SQL: MSQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */

 /**
  * Entidade: Algo que será salvo no banco de dados
  * 
  * Ong
  * Incident (Caso)
  */

 /**
  * Funcionalidades
  * 
  * Login de ong
  * logout de ong
  * Cadastro de ong
  * Cadastrar novos casos
  * Deletar casos
  * Listar casos específicos de uma ong
  * Listar todos os casos
  * Entrar em contato com a ong
  */

  /**
   * Migrations Knex
   * 
   * Forma de criar tabelas e manter o hitórico das tabelas que foram criadas,
   * alteradas, quando uma nova tabela foi criada, um campo alterado por outro
   * (controle de versão do banco de dados) 
   */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); /**Caso projeto seja colocado em produção, cors({ origin:'http://meuapp.com' }) -> Hospedagem do frontend.
Garante que somente a url/frontend permitido acesse o backend*/
app.use(express.json());
app.use(routes);

app.listen(3333);

