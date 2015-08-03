'use strict';

import VError from 'verror';
import { assign } from 'lodash';

function getParams(ctx) {
  return assign({}, ctx.query, ctx.request.body, ctx.params);
}

export default class BaseController {
  *list(Model, next) {
    this.body = yield Model
      .fetch(getParams(this))
      .catch(e => this.throw(new VError(e, 'fetch error'), 400));

    yield next;
  }

  *show(Model, next) {
    const model = yield Model
      .fetchOne(getParams(this))
      .catch(e => this.throw(new VError(e, 'fetchOne error'), 400));

    if (!model) { this.throw('Not found', 404); }

    this.body = model;
    yield next;
  }

  *create(Model, next) {
    const result = yield Model.create(getParams(this))
      .catch(e => this.throw(new VError(e, 'create error'), 400));

    this.body = result;
    yield next;
  }

  *destroy(Model, next) {
    const model = yield Model
      .fetchOne(getParams(this))
      .catch(e => this.throw(new VError(e, 'fetchOne error'), 400));
    
    if (!model) { this.throw('Not found', 404); }

    const result = yield model
      .destroy()
      .catch(e => this.throw(new VError(e, 'destroy error'), 400));
    
    this.body = result;
    yield next;
  }
};
