import validate from './validate';
import assert from './assert';

export default (...validateArgs) => {
  const response = validate(...validateArgs);
  assert(response.valid, response);
};
