/*********************************************************************
*
*   include some packages
*
********************************************************************/
const express = require('express')
const app = express()
const port = 3000
const { Faker } = require('fakergem');

/*********************************************************************
*
*   database config
*
********************************************************************/
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : 'some.postgresql.com',
    user : 'postgres',
    password : 'password',
    database : 'knex_postgresql_poc'
  }
});

/*********************************************************************
*
*   list table data
*
********************************************************************/
app.get('/list', async (request, response) => {
  try{
    const result = await knex.select().table('demo');
    response.status(200).json(result);
  }catch(error){
    response.status(500).json({error: 'oops, something went wrong' });
  }
});

/*********************************************************************
*
*   push some data into the database
*
********************************************************************/
app.get('/push', async (request, response) => {
  let title = Faker.Book.title();
  let description = Faker.ChuckNorris.fact();


  try{
    const result = await knex('demo').insert({title: title, description: description, createdAt: knex.fn.now()})
    response.status(200).json({ success: 'inserted some data',
                                data:{
                                  title: title,
                                  description: description
                                } });
  }catch(error){
    response.status(500).json({error: 'oops, something went wrong', msg: error });
  }
});

/*********************************************************************
*
*   entrypoint root url
*
********************************************************************/
app.get('/', (req, res) => {
  res.send("<p><b>choose wisely</b>\
  <ul>\
    <li><a href='/list'>list</a> - show the current table entries</li>\
    <li><a href='/push'>push</a> - create a random entry</li>\
  </ul></p>\
  ")
})

/*********************************************************************
*
*   some cli info
*
********************************************************************/
app.listen(port, () => {
  console.log(`KNEX poc is listening at http://localhost:${port}`)
})