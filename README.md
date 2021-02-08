# knex postgresql demo

## usage

You need at least a postgres database and run the `sql/demo.sql` script to create the demo table.

```
# clone the repository
git clone git@github.com:Loumaris/knex_postgresql_poc.git
cd knex_postgresql_poc

# install packages
npm install

# add the credentials for postgres in the header of `app.js`
npm run start
```

* access the index at http://localhost:3000
* insert some data via http://localhost:3000/push
* insert list all data via http://localhost:3000/list