import DogModel from 'models/Dog';

export const Dog = DogModel;

export async function getDog(id) {
  return (await Dog.fetchOne({ id })).toJSON();
}

export async function getDogs() {
  return (await (new Dog()).fetchAll()).toJSON();
}
