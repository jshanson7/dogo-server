'use strict';

import User from '../models/user';
import Rest from './compose/rest';

const { list, show, create, destroy } = Rest(User);

export default class UserController {
  list = list
  show = show
  create = create
  destroy = destroy
};
