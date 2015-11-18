import { range, sample, pluck } from 'lodash';
import { knex } from 'db';
import Chance from 'chance';
import breeds from './breeds';

let chance = Chance();

export function fakeUser() {
  return {
    first_name: chance.first(),
    last_name: chance.last(),
    created_at: chance.date({ year: 2013 }),
    updated_at: chance.date({ year: 2014 })
  };
}

export function fakeShelter() {
  return {
    name: chance.last() + ' Shelter',
    created_at: chance.date({ year: 2013 }),
    updated_at: chance.date({ year: 2014 })
  };
}

export function fakeDog(shelterID) {
  return {
    name: chance.last(),
    breed: sample(breeds),
    description: chance.sentence(),
    dot_color: sample(['green', 'yellow', 'red']),
    shelter_id: shelterID,
    created_at: chance.date({ year: 2013 }),
    updated_at: chance.date({ year: 2014 })
  };
}

export function fakeNote(dogID, userID) {
  return {
    text: chance.sentence(),
    dog_id: dogID,
    user_id: userID,
    created_at: chance.date({ year: 2013 }),
    updated_at: chance.date({ year: 2014 })
  };
}

export async function generate(count, seed) {
  if (seed) { chance = Chance(seed); }
  const users = await generateUsers(count);
  const shelters = await generateShelters(count);
  const dogs = await generateDogs(count, pluck(shelters, 'id'));
  const notes = await generateNotes(count, pluck(dogs, 'id'), pluck(users, 'id'));

  return { users, shelters, dogs, notes };
}

export async function generateUsers(count) {
  return await insert('users', range(count).map(fakeUser));
}

export async function generateShelters(count) {
  return await insert('shelters', range(count).map(fakeShelter));
}

export async function generateDogs(count, shelterIDs) {
  return await insert('dogs', range(count).map(() => fakeDog(sample(shelterIDs))));
}

export async function generateNotes(count, dogIDs, userIDs) {
  return await insert('notes', range(count).map(() => fakeNote(sample(dogIDs), sample(userIDs))));
}

async function insert(table, data) {
  const result = await knex()(table).insert(data).returning('*');
  return data instanceof Array ? result : result[0];
}
