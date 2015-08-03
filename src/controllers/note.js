'use strict';

import Note from '../models/note';
import Rest from './compose/rest';

const { list, show, create, destroy } = Rest(Note);

export default class NoteController {
  list = list
  show = show
  create = create
  destroy = destroy
};
