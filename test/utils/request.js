import superagent from 'supertest';

export default () => superagent(require('app').app.listen());
