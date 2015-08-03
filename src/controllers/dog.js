'use strict';

import Dog from '../models/dog';
import Rest from './compose/rest';

const { list, show, create, destroy } = Rest(Dog);

export default class DogController {
  list = list
  show = show
  create = create
  destroy = destroy
};
