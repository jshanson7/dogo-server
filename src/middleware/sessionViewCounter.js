export default async (ctx, next) => {
  if (ctx.path === '/favicon.ico') { return; }

  let current = ctx.session.views || 0;
  ctx.session.views = ++current;
  await next();
};
