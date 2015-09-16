export class User extends Object {};
export class Dog extends Object {};
export class Note extends Object {};

let firstUser = new User();
firstUser.id = '1';
firstUser.first_name = 'Jeff';
firstUser.last_name = 'Hanson';

let firstDog = new Dog();
firstDog.id = '1';
firstDog.name = 'Ghost';
firstDog.description = 'Very loyal.';
firstDog.breed = 'Dire Wolf';

let firstNote = new Note();
firstNote.id = '1';
firstNote.text = 'Ghost tore the throat out of a wildling today';
firstNote.dog = '1';
firstNote.user = '1';

let data = {
  User: {
    1: firstUser
  },
  Dog: {
    1: firstDog
  },
  Note: {
    1: firstNote
  }
};

export function getUser(id) {
  return data.User[id];
}

export function getUsers() {
  return data.User.map(user => user);
}

let nextUser = 2;
export function createUser(user) {
  let newUser = new User();

  newUser.id = '' + (nextUser++);
  newUser.first_name = user.first_name;
  newUser.last_name = user.last_name;

  data.User[newUser.id] = newUser;
  return newUser;
}

export function getDog(id) {
  return data.Dog[id];
}

let nextDog = 2;
export function createDog(dog) {
  let newDog = new Dog();

  newDog.id = '' + (nextDog++);
  newDog.name = dog.name;
  newDog.description = dog.description;
  newDog.breed = dog.breed;

  data.Dog[newDog.id] = newDog;
  return newDog;
}

export function getNote(id) {
  return data.Note[id];
}

let nextNote = 2;
export function createNote(note) {
  let newNote = new Note();

  newNote.id = '' + (nextNote++);
  newNote.text = note.text;
  newNote.dog = note.dog;
  newNote.user = note.user;

  data.Note[newNote.id] = newNote;
  return newNote;
}
