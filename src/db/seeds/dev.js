'use strict';

var chance = require('chance').Chance();
var breeds = require('../breeds');
var _ = require('lodash');
var range = _.range;
var sample = _.sample;
var numberOfSeeds = 100;

var users = [
  {
    'first_name': 'Steph',
    'last_name': 'Ryan',
    'created_at': new Date(),
    'updated_at': new Date(),
  },
  {
    'first_name': 'Jon',
    'last_name': 'Snow',
    'created_at': new Date(),
    'updated_at': new Date(),
  }
].concat(range(3, numberOfSeeds + 1).map(function(id) {
  return {
    'first_name': chance.first(),
    'last_name': chance.last(),
    'created_at': chance.date({year: 2013}),
    'updated_at': chance.date({year: 2014}),
  };
}));

var dogs = [
  {
    'name': 'Matza',
    'breed': 'Labradoodle',
    'description': 'Cute dog that coughs alot.',
    'dot_color': 'green',
    'created_at': new Date(),
    'updated_at': new Date(),
  },
  {
    'name': 'Ghost',
    'breed': 'Dire Wolf',
    'description': 'White with blue eyes, very loyal.',
    'dot_color': 'red',
    'created_at': new Date(),
    'updated_at': new Date()
  }
].concat(range(3, numberOfSeeds + 1).map(function(id) {
  return {
    'name': chance.last(),
    'breed': sample(breeds),
    'description': chance.sentence(),
    'dot_color': sample(['green', 'yellow', 'red']),
    'created_at': chance.date({year: 2013}),
    'updated_at': chance.date({year: 2014}),
  };
}));

var notes = [
  {
    'text': 'Matza peed in the elevator.',
    'dog_id': 1,
    'user_id': 1,
    'created_at': new Date(),
    'updated_at': new Date(),
  },
  {
    'text': 'Yesterday Ghost tore the throat out of a wildling.',
    'dog_id': 2,
    'user_id': 2,
    'created_at': new Date(),
    'updated_at': new Date(),
  }
].concat(range(3, numberOfSeeds).map(function(id) {
  return {
    'text': chance.sentence(),
    'dog_id': sample(range(1, numberOfSeeds + 1)),
    'user_id': sample(range(1, numberOfSeeds + 1)),
    'created_at': chance.date({year: 2013}),
    'updated_at': chance.date({year: 2014}),
  };
}));

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('notes').del(), 
    knex('dogs').del(), 
    knex('users').del(), 
    knex('users').insert(users),
    knex('dogs').insert(dogs),
    knex('notes').insert(notes)
  );
};
