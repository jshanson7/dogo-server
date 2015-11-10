import co from 'co';

export default asyncFn =>
  function* (next) {
    const ctx = this;
    yield asyncFn(ctx, co.wrap(function* () {
      yield next;
    }));
  };
