'use strict';

import { assign } from 'lodash';
import Note from '../models/note';
import rest from './compose/rest';

class NoteController {};

assign(NoteController.prototype, rest(Note));

export default NoteController;
