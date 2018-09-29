const vastify = require('vastify')
const config = require('./config')
const version = require('../package.json').version
// const version = '2.0.0'
const microservicePort = 10018
const httpPort = 3338

vastify.ServerRegister.register({
  bizService: {
    name: 'config-server',
    host: '127.0.0.1',
    port: httpPort,
    meta: {
      $$version: version,
      $$microservicePort: microservicePort
    }
  }
}).then(res => {
  const { seneca, web } = vastify.getInstance({
    seneca: {
      log: {
        level: 'all'
      }
    }
  })
  const app = web.app

  seneca.add('$$target:config-server', function (msg, done) {
    return done(null, Object.assign({}, config, { version }))
  }).listen(microservicePort)

  seneca.ready(() => {
    app.use(seneca.export('web/context')().routes())
    app.listen(httpPort)
  })
})

