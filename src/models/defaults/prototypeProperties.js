import { result } from 'lodash';
import assertValid from '../../utils/assertValid';

export default {
  hasTimestamps: ['created_at', 'updated_at'],
  defaults: { created_at: null, updated_at: null },

  initialize() {
    this.on('saving', this.validateSave);
  },

  validateSave() {
    assertValid(
      this.attributes,
      result(this.constructor, 'schema'),
      'error validating attributes on save'
    );
    return true;
  }
};