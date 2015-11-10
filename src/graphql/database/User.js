import UserModel from 'models/User';

export const User = UserModel;

export async function getUser(id) {
  return (await User.fetchOne({ id: id })).toJSON();
}

export async function getUsers() {
  return (await User.fetchAll()).toJSON();
}

// export function createUser(user) {
//   let newUser = new User();

//   newUser.id = '' + (nextUser++);
//   newUser.first_name = user.first_name;
//   newUser.last_name = user.last_name;

//   data.User[newUser.id] = newUser;
//   return newUser;
// }
