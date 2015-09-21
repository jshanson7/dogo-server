import koaRouter from 'koa-router';
import ShelterController from '../controllers/shelter';

const router = koaRouter();
const shelterController = new ShelterController();

router.get('/', shelterController.list);
router.get('/:id', shelterController.show);
router.post('/', shelterController.create);
router.delete('/:id', shelterController.destroy);

export default router;
