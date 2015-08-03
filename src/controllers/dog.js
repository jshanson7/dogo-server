'use strict';

import { assign } from 'lodash';
import Dog from '../models/dog';
import rest from './compose/rest';

class DogController {};

assign(DogController.prototype, rest(Dog));

export default DogController;
