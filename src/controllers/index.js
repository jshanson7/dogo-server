import User from '../models/user';
import Dog from '../models/dog';
import Shelter from '../models/shelter';
import Note from '../models/note';
import getRestfulMethodsForModel from './utils/getRestfulMethodsForModel';

export const UserController = getRestfulMethodsForModel(User);
export const DogController = getRestfulMethodsForModel(Dog);
export const ShelterController = getRestfulMethodsForModel(Shelter);
export const NoteController = getRestfulMethodsForModel(Note);
