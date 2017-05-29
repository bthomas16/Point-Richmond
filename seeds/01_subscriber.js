
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subscribers').del()
    .then(() => {
      // Inserts seed entries
      const subscribers = [{
        fname:'bish',
        email: 'gish@gish.com'
      },{
        fname:'supa bish',
        email:'wish@shish.com'
      }]
      return knex('subscribers').insert(subscribers);
    });
};
