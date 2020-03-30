const users = require('../models/users.model');

async function findAll() {
  return await users.findAll({});
}

// function find(searchBy = {}) {
//   return await users.findAll({searchBy});
// }

// function findOne(name) {
//   const user = users.find(u => u.name === name);
//   if (!user.length) {
//     throw new Error('user not found');
//   }
//   return user;
// }

// function insert(task) {
//   const id = Math.max(...tasks.map(u => u.id)) + 1;
//   const newtask = {
//     id,
//     ...task
//   };
//   tasks.push(newtask);
//   return tasks;
// }

// function update(task) {
//   const index = tasks.findIndex(u => u.id == task.id);
//   if (task === -1) throw new Error('ID_NOT_FOUND');

//   _validateState(tasks[index].state, task.state);

//   tasks[index].title = task.title;
//   tasks[index].details = task.details;
//   tasks[index].dueDate = task.dueDate;
//   tasks[index].state = task.state;

//   return tasks[index];
// }

// function deleteById(id) {
//   const delIdx = tasks.findIndex(u => u.id == id);
//   if (delIdx === -1) throw new Error('ID_NOT_FOUND');
//   tasks.splice(delIdx, 1);
//   return tasks;
// }

// function _validateState(previousState, newState) {
//   if (!states[newState]) throw new Error('STATE_NOT_FOUND');
//   if (!states[previousState]) throw new Error('STATE_NOT_FOUND');

//   if (stateHirarchy[previousState].findIndex(u => u == states[newState]) === -1)
//     throw new Error('STATE_NOT_VALID');
// }

module.exports = {
//  deleteById,
  findAll
//   find,
//   findOne,
//   insert,
//   update
};
