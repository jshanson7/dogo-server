import koaRouter from 'koa-router';
import addRestRoutes from './utils/addRestRoutes';
import {
  UserController,
  DogController,
  ShelterController,
  NoteController
} from '../controllers';

export const UserRouter = addRestRoutes(koaRouter(), UserController);
export const DogRouter = addRestRoutes(koaRouter(), DogController);
export const ShelterRouter = addRestRoutes(koaRouter(), ShelterController);
export const NoteRouter = addRestRoutes(koaRouter(), NoteController);
export const IndexRouter = koaRouter()
  .get('/', function* (next) { this.body = 'Dogo api'; yield next; })
  .use('/users', UserRouter.routes())
  .use('/dogs', DogRouter.routes())
  .use('/shelters', ShelterRouter.routes())
  .use('/notes', NoteRouter.routes());
