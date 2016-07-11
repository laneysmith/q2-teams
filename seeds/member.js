
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('member').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('member').insert({first_name: 'Will', last_name: 'Thomas'}),
        knex('member').insert({first_name: 'Daniel', last_name: 'Abbott'}),
        knex('member').insert({first_name: 'Bennett', last_name: 'Joerger'})
      ]);
    });
};
