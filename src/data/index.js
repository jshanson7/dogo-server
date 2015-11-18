import { App, User, Shelter, Dog, Note } from 'models';

let app;

export async function getApp() { return app || (app = new App()); }
export async function getUser(id) { return await getOne(User, id); }
export async function getUsers() { return await getAll(User); }
export async function getShelter(id) { return await getOne(Shelter, id); }
export async function getShelters() { return await getAll(Shelter); }
export async function getDog(id) { return await getOne(Dog, id); }
export async function getDogs() { return await getAll(Dog); }
export async function getNote(id) { return await getOne(Note, id); }
export async function getNotes() { return await getAll(Note); }

export async function getOne(Model, id) { return (await new Model({ id }).fetch()).toJSON(); }
export async function getAll(Model) { return (await (new Model()).fetchAll()).toJSON(); }

// export function createUser(user) {
//   let newUser = new User();

//   newUser.id = '' + (nextUser++);
//   newUser.first_name = user.first_name;
//   newUser.last_name = user.last_name;

//   data.User[newUser.id] = newUser;
//   return newUser;
// }
