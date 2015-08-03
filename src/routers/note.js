'use strict';

import koaRouter from 'koa-router';
import NoteController from '../controllers/note';

const router = koaRouter();
const noteController = new NoteController();

router.get('/', noteController.list);
router.get('/:id', noteController.show);
router.post('/', noteController.create);
router.delete('/:id', noteController.destroy);

export default router;
