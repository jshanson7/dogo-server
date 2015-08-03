'use strict';

import User from '../models/user';
import BaseController from './base';

export default class UserController extends BaseController {
	list(next) {
	  return super.list.call(this, User, next);
	}

	show(next) {
		return super.show.call(this, User, next);
	}

	create(next) {
		return super.create.call(this, User, next);
	}

	destroy(next) {
		return super.destroy.call(this, User, next);
	}
};
