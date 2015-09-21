'use strict';

import { assign } from 'lodash';
import Shelter from '../models/shelter';
import rest from './compose/rest';

class ShelterController {}

assign(ShelterController.prototype, rest(Shelter));

export default ShelterController;
