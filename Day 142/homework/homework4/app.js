import createUser, { deleteUser } from './userService.js';

const user = createUser("Nika");
console.log(user);

console.log(deleteUser(user.id));