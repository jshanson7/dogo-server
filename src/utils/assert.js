import VError from 'verror';

export default (condition, ...errorMessages) => {
  if (!condition) {
    throw new VError(...errorMessages);
  }
};
