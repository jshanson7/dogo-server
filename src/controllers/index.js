import { User, Dog, Shelter, Note } from 'models';
import { methodsForModel } from './rest';

export const UserController = methodsForModel(User);
export const DogController = methodsForModel(Dog);
export const ShelterController = methodsForModel(Shelter);
export const NoteController = methodsForModel(Note);
