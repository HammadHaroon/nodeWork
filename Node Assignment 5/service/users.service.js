const repo = require('../repositories/users.repository');

async function findAll() {
  return await repo.findAll();
}

// async function find(searchBy = {}) {
//   return await repo.find(searchBy);
// }

// function findOne(name) {
//   return repo.findOne(name);
// }

// function insert(task) {
//   task.state = states.new;
//   return repo.insert(task);
// }

// function update(task) {
//   return repo.update(task);
// }

// function deleteById(id) {
//   return repo.deleteById(id);
// }

module.exports = {
//  deleteById,
  findAll
//   find,
//   findOne,
//   insert,
//   update
};
