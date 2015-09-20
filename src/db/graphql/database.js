import UserModel from '../../models/user';

export class DogoApplication extends Object {}
export class User extends Object {}
export class Admin extends Object {}
export class Widget extends Object {}
export class Dog extends Object {}
export class Note extends Object {}


let admin = new Admin();
admin.id = '1';
admin.first_name = 'Jeff';
admin.last_name = 'Hanson';
admin.roles = ['admin'];

let viewer = new User();
viewer.id = '1';
viewer.first_name = 'Jon';
viewer.last_name = 'Snow';

let firstUser = new User();
firstUser.id = '2';
firstUser.first_name = 'Lebron';
firstUser.last_name = 'James';

let widgets = ['What\'s-it', 'Who\'s-it', 'How\'s-it'].map((name, i) => {
  let widget = new Widget();
  widget.name = name;
  widget.id = `${i}`;
  return widget;
});

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
  User: [viewer, firstUser],
  Dog: {
    1: firstDog
  },
  Note: {
    1: firstNote
  },
  Widget: widgets
};

export function getAdmin(id) {
  return admin;
}

export async function getUser(id) {
  let user = (await UserModel.fetchOne({ id: id })).toJSON();
  user.notes = user.notes.toString();
  return user;
}

export async function getUsers() {
  return (await UserModel.fetchAll()).toJSON().map(user => {
    user.notes = user.notes.toString();
    return user;
  });
}

export function getViewer() {
  return viewer;
}

export function getWidget(id) {
  return widgets.find(w => w.id === id);
}

export function getWidgets() {
  return data.Widget.map(widget => widget);
}

let nextUser = 3;
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

let dogoApplication = new DogoApplication();
dogoApplication.users = [];
dogoApplication.shelters = [];

export async function getDogoApplication() {
  dogoApplication.users = await getUsers();
  dogoApplication.shelters = [];
  return dogoApplication;
}
