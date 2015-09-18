export class User extends Object {}
export class Widget extends Object {}
export class Dog extends Object {}
export class Note extends Object {}

let viewer = new User();
viewer.id = '1';
viewer.first_name = 'Anonymous';
viewer.last_name = '';

let firstUser = new User();
firstUser.id = '2';
firstUser.first_name = 'Jeff';
firstUser.last_name = 'Hanson';

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
  User: {
    1: viewer,
    2: firstUser
  },
  Dog: {
    1: firstDog
  },
  Note: {
    1: firstNote
  },
  Widget: widgets
};

export function getUser(id) {
  return data.User[id];
  // return id === viewer.id ? viewer : null;
}

export function getUsers() {
  return data.User.map(user => user);
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
