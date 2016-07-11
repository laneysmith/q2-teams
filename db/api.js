var knex = require('../db/knex');

module.exports = {
  findMembers: function() {
    return knex('member').select();
  }
};
