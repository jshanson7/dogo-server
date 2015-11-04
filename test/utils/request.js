import superagent from 'supertest';

export default () => superagent(require('../../src/app').listen());
