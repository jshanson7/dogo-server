import koaRouter from 'koa-router';
import addRestRoutes from './utils/addRestRoutes';
import {
  UserController,
  DogController,
  ShelterController,
  NoteController
} from '../controllers';

const UserRouter = addRestRoutes(koaRouter(), UserController);
const DogRouter = addRestRoutes(koaRouter(), DogController);
const ShelterRouter = addRestRoutes(koaRouter(), ShelterController);
const NoteRouter = addRestRoutes(koaRouter(), NoteController);
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
