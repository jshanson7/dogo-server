import ShelterModel from 'models/Shelter';

export const Shelter = ShelterModel;

export async function getShelter(id) {
  return (await Shelter.fetchOne({ id: id })).toJSON();
}

export async function getShelters() {
  return (await Shelter.fetchAll()).toJSON();
}
