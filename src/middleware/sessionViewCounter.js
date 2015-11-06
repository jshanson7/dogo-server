export default function *(next) {
  if (this.path === '/favicon.ico') { return; }

  var n = this.session.views || 0;
  this.session.views = ++n;
  yield next;
}
