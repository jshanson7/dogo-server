'use strict';

import koaRouter from 'koa-router';
import dog from './dog';
import user from './user';
import note from './note';

const router = koaRouter();

router.get('/', function* (next) { this.body = 'Dogo api'; yield next; });
router.use('/dogs', dog.routes());
router.use('/users', user.routes());
router.use('/notes', note.routes());

export default router;
