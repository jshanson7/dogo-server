import Dog from './Dog';
import { createModel } from './utils';

export default createModel({
  prototypeProps: {
    tableName: 'shelters',
    defaults: { name: null, },
    dogs() { return this.hasMany(Dog); }
  },
  classProps: {
    Name: 'Shelter',
    relations: ['dogs'],
    schema: {
      properties: {
        name: {
          required: true,
          type: 'string',
          minLength: 1,
          maxLength: 70
        }
      }
    }
  }
});
