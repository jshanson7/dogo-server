'use strict';

import { assign } from 'lodash';
import User from '../models/user';
import rest from './compose/rest';

class UserController {};

assign(UserController.prototype, rest(User));

export default UserController;
