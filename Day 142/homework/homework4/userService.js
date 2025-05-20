export default function createUser(name) {
  return { id: Date.now(), name };
}

export function deleteUser(id) {
  return `User with id ${id} deleted.`;
}