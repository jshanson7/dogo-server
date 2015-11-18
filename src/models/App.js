export default class App {
  static Name = 'App';

  fetch() {
    return this;
  }

  fetchAll() {
    const col = [this];
    col.toJSON = () => col;
    return col;
  }

  toJSON() {
    return this;
  }
}
