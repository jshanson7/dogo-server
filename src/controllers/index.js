import User from '../models/user';
import Dog from '../models/dog';
import Shelter from '../models/shelter';
import Note from '../models/note';
import restMethodsForModel from './utils/restMethodsForModel';

export const UserController = restMethodsForModel(User);
export const DogController = restMethodsForModel(Dog);
export const ShelterController = restMethodsForModel(Shelter);
export const NoteController = restMethodsForModel(Note);
