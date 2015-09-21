import User from '../../models/user';
import Shelter from '../../models/shelter';

// export class User extends Object {}
// export class Dog extends Object {}
// export class Note extends Object {}

// export class Shelter extends Object {}
// let familyDogRescue = new Shelter();
// familyDogRescue.id = 1;
// familyDogRescue.name = 'Family Dog Rescue';

export class App extends Object {}
let app = new App();
app.users = [];
app.shelters = [];

export async function getApp() {
  app.users = await getUsers();
  app.shelters = await getShelters();
  return app;
}

exports.User = User;
exports.Shelter = Shelter;

export async function getUser(id) {
  let user = (await User.fetchOne({ id: id })).toJSON();
  user.notes = user.notes.toString();
  return user;
}

export async function getUsers() {
  return (await User.fetchAll()).toJSON().map(user => {
    user.notes = user.notes.toString();
    return user;
  });
}

export async function getShelter(id) {
  return (await Shelter.fetchOne({ id: id })).toJSON();
}

export async function getShelters() {
  return (await Shelter.fetchAll()).toJSON();
}

// export function createUser(user) {
//   let newUser = new User();

//   newUser.id = '' + (nextUser++);
//   newUser.first_name = user.first_name;
//   newUser.last_name = user.last_name;

//   data.User[newUser.id] = newUser;
//   return newUser;
// }
