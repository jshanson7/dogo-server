import koaRouter from 'koa-router';
import createRestRouter from './utils/createRestRouter';
import {
  UserController,
  DogController,
  ShelterController,
  NoteController
} from '../controllers';

const UserRouter = createRestRouter(UserController);
const DogRouter = createRestRouter(DogController);
const ShelterRouter = createRestRouter(ShelterController);
const NoteRouter = createRestRouter(NoteController);
const IndexRouter = koaRouter()
  .get('/', function* (next) { this.body = 'Dogo api'; yield next; })
  .use('/users', UserRouter.routes())
  .use('/dogs', DogRouter.routes())
  .use('/shelters', ShelterRouter.routes())
  .use('/notes', NoteRouter.routes());

export default {
  IndexRouter,
  UserRouter,
  DogRouter,
  ShelterRouter,
  NoteRouter
};
