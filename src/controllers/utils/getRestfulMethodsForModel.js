import VError from 'verror';
import paramsForCTX from './paramsForCTX';

export default Model => ({
  *list(next) {
    this.body = yield Model
      .fetch(paramsForCTX(this))
      .catch(e => this.throw(new VError(e, 'fetch error'), 400));

    yield next;
  },

  *show(next) {
    const model = yield Model
      .fetchOne(paramsForCTX(this))
      .catch(e => this.throw(new VError(e, 'fetchOne error'), 400));

    if (!model) { this.throw('Not found', 404); }

    this.body = model;
    yield next;
  },

  *create(next) {
    this.body = yield Model.create(paramsForCTX(this))
      .catch(e => this.throw(new VError(e, 'create error'), 400));

    yield next;
  },

  *destroy(next) {
    this.body = yield Model.destroy(paramsForCTX(this))
      .catch(e => this.throw(new VError(e, 'destroy error'), 400));

    yield next;
  }
});
