'use strict';

import Note from '../models/note';
import BaseController from './base';

export default class NoteController extends BaseController {
  list(next) {
    return super.list.call(this, Note, next);
  }

  show(next) {
    return super.show.call(this, Note, next);
  }

  create(next) {
    return super.create.call(this, Note, next);
  }

  destroy(next) {
    return super.destroy.call(this, Note, next);
  }
};
