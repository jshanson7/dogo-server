import koaRouter from 'koa-router';

export default Controller =>
  koaRouter()
    .get('/', Controller.list)
    .get('/:id', Controller.show)
    .post('/', Controller.create)
    .delete('/:id', Controller.destroy);
