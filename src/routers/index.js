import koaRouter from 'koa-router';
import addRestfulRoutes from './utils/addRestfulRoutes';
import {
  UserController,
  DogController,
  ShelterController,
  NoteController
} from '../controllers';

export const UserRouter = addRestfulRoutes(koaRouter(), UserController);
export const DogRouter = addRestfulRoutes(koaRouter(), DogController);
export const ShelterRouter = addRestfulRoutes(koaRouter(), ShelterController);
export const NoteRouter = addRestfulRoutes(koaRouter(), NoteController);
export const IndexRouter = koaRouter()
  .get('/', function* (next) { this.body = 'Dogo api'; yield next; })
  .use('/users', UserRouter.routes())
  .use('/dogs', DogRouter.routes())
  .use('/shelters', ShelterRouter.routes())
  .use('/notes', NoteRouter.routes());
