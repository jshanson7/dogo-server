import VError from 'verror';
import validate from './validate';

export default (object, schema, options, errorMessage) => {
  const response = validate(object, schema, options);
  if (response.valid) {
    return response;
  } else if (errorMessage) {
    throw new VError(`${errorMessage}: \n\t%s`, response);
  } else {
    throw response;
  }
};
