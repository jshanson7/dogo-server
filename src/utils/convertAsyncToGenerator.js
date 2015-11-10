import co from 'co';

export default asyncFunc =>
  function* (next) {
    const ctx = this;
    yield asyncFunc(ctx, co.wrap(function* () {
      yield next;
    }));
  };
