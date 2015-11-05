export default ctx =>
  Object.assign({}, ctx.query, ctx.request.body, ctx.params);
