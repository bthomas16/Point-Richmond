const knex = require('./knex')

function newSubscriber(body){
  console.log(body);
  console.log("hello everybody");
  return knex('subscribers').insert({
    fname: body.fname,
    email: body.email
  })
}

module.exports = {
  newSubscriber
}
