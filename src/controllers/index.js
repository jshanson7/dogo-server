import { User, Dog, Shelter, Note } from 'models';
import { restMethods } from './rest';

export const UserController = restMethods({
  Model: User,
  defaultParams: {
    list: {
      searchBy: ['first_name', 'last_name'],
      withRelated: ['notes', 'notes.dog']
    },
    show: {
      withRelated: ['notes', 'notes.dog']
    }
  }
});

export const DogController = restMethods({
  Model: Dog,
  defaultParams: {
    list: {
      searchBy: ['name', 'description', 'breed', 'dot_color'],
      withRelated: ['shelter', 'notes', 'notes.author']
    },
    show: {
      withRelated: ['shelter', 'notes', 'notes.author']
    }
  }
});

export const ShelterController = restMethods({
  Model: Shelter,
  defaultParams: {
    list: {
      searchBy: ['name'],
      withRelated: ['dogs']
    },
    show: {
      withRelated: ['dogs']
    }
  }
});

export const NoteController = restMethods({
  Model: Note,
  defaultParams: {
    list: {
      searchBy: ['text'],
      withRelated: ['dog', 'author']
    },
    show: {
      withRelated: ['dog', 'author']
    }
  }
});
