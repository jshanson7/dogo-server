'use strict';

import koaRouter from 'koa-router';
import DogController from '../controllers/dog';

const router = koaRouter();
const dogController = new DogController();

router.get('/', dogController.list);
router.get('/:id', dogController.show);
router.post('/', dogController.create);
router.delete('/:id', dogController.destroy);

export default router;
