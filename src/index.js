require('babel/register');

const config = require('../config');

require('./app')
  .listen(config.port, config.host, () =>
    console.log(`App listening on port ${config.port} env: ${config.env}`)
  );
