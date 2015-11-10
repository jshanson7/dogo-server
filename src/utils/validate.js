import VError from 'verror';
import revalidator from 'revalidator';

export default (object, schema, optionsOrErrorMessage, ...moreErrorMessages) => {
  const hasOptions = optionsOrErrorMessage && typeof optionsOrErrorMessage !== 'string';
  const options = hasOptions ? optionsOrErrorMessage : undefined;
  const errorMessages = hasOptions ? moreErrorMessages : [optionsOrErrorMessage, ...moreErrorMessages];
  const response = revalidator.validate(object, schema, options);

  return response.valid ?
    response :
    new VError(
      ...errorMessages,
      'validation errors: \n\t%s',
      response.errors.map(e => e.property + ': ' + e.message).join('\n\t')
    );
};
