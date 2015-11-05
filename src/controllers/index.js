import User from '../models/user';
import Dog from '../models/dog';
import Shelter from '../models/shelter';
import Note from '../models/note';
import restMethodsForModel from './utils/restMethodsForModel';

export default {
  UserController: restMethodsForModel(User),
  DogController: restMethodsForModel(Dog),
  ShelterController: restMethodsForModel(Shelter),
  NoteController: restMethodsForModel(Note)
};
