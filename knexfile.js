require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/q2-teams'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
