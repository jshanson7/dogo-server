export default asyncFunc =>
  function* (next) {
    yield asyncFunc(this, function* () {
      yield next;
    });
  };
