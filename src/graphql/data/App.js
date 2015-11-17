import { getUsers, getShelters } from './';

export class App extends Object {}

let app = new App();

export async function getApp() {
  [app.users, app.shelters] = await [getUsers(), getShelters()];
  return app;
}
