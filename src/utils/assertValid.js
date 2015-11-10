import validate from './validate';
import assert from './assert';

export default (object, schema, options, ...errorMessages) => {
  const response = validate(object, schema, options, ...errorMessages);
  assert(response.valid, response);
};
