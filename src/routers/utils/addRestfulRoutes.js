export default (Router, Controller) =>
  Router
    .get('/', Controller.list)
    .get('/:id', Controller.show)
    .post('/', Controller.create)
    .delete('/:id', Controller.destroy);
