import User from '../models/User';
import Dog from '../models/Dog';
import Shelter from '../models/Shelter';
import Note from '../models/Note';
import getRestfulMethodsForModel from './utils/getRestfulMethodsForModel';

export const UserController = getRestfulMethodsForModel(User);
export const DogController = getRestfulMethodsForModel(Dog);
export const ShelterController = getRestfulMethodsForModel(Shelter);
export const NoteController = getRestfulMethodsForModel(Note);
