import koaRouter from 'koa-router';
import UserController from '../controllers/user';

const router = koaRouter();
const userController = new UserController();

router.get('/', userController.list);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.delete('/:id', userController.destroy);

export default router;
