import convertAsyncToGenerator from '../../utils/convertAsyncToGenerator';

export default (Router, Controller) =>
  Router
    .get('/', convertAsyncToGenerator(Controller.list))
    .get('/:id', convertAsyncToGenerator(Controller.show))
    .post('/', convertAsyncToGenerator(Controller.create))
    .delete('/:id', convertAsyncToGenerator(Controller.destroy));

