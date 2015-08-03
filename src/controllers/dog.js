'use strict';

import Dog from '../models/dog';
import BaseController from './base';

export default class DogController extends BaseController {
  list(next) {
    return super.list.call(this, Dog, next);
  }

  show(next) {
    return super.show.call(this, Dog, next);
  }

  create(next) {
    return super.create.call(this, Dog, next);
  }

  destroy(next) {
    return super.destroy.call(this, Dog, next);
  }
};