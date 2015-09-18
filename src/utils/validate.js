import VError from 'verror';
import revalidator from 'revalidator';

export default (object, schema, options) => new Promise((resolve, reject) => {
  const response = revalidator.validate(object, schema, options);
  return response.valid ?
    resolve() :
    reject(
      new VError(
        'validation errors: \n\t%s',
        response.errors.map(e => e.property + ': ' + e.message).join('\n\t')
      )
    );
});
