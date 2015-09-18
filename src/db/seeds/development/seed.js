import { range, sample } from 'lodash';
import Chance from 'chance';
import breeds from '../breeds';

const chance = Chance();
const numberOfSeeds = 100;

const users = [
  {
    first_name: 'Jeff',
    last_name: 'Hanson',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: 'Jon',
    last_name: 'Snow',
    created_at: new Date(),
    updated_at: new Date(),
  }
].concat(range(3, numberOfSeeds + 1).map(id => {
  return {
    first_name: chance.first(),
    last_name: chance.last(),
    created_at: chance.date({year: 2013}),
    updated_at: chance.date({year: 2014}),
  };
}));

const dogs = [
  {
    name: 'Matza',
    breed: 'Labradoodle',
    description: 'Cute dog that coughs alot.',
    dot_color: 'green',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: 'Ghost',
    breed: 'Dire Wolf',
    description: 'White with blue eyes, very loyal.',
    dot_color: 'red',
    created_at: new Date(),
    updated_at: new Date()
  }
].concat(range(3, numberOfSeeds + 1).map(id => {
  return {
    name: chance.last(),
    breed: sample(breeds),
    description: chance.sentence(),
    dot_color: sample(['green', 'yellow', 'red']),
    created_at: chance.date({year: 2013}),
    updated_at: chance.date({year: 2014}),
  };
}));

const notes = [
  {
    text: 'Matza peed in the elevator.',
    dog_id: 1,
    user_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    text: 'Yesterday Ghost tore the throat out of a wildling.',
    dog_id: 2,
    user_id: 2,
    created_at: new Date(),
    updated_at: new Date(),
  }
].concat(range(3, numberOfSeeds).map(id => {
  return {
    text: chance.sentence(),
    dog_id: sample(range(1, numberOfSeeds + 1)),
    user_id: sample(range(1, numberOfSeeds + 1)),
    created_at: chance.date({year: 2013}),
    updated_at: chance.date({year: 2014}),
  };
}));

exports.seed = (knex, Promise) => {
  return Promise.join(
    knex('users').insert(users),
    knex('dogs').insert(dogs),
    knex('notes').insert(notes)
  );
};
