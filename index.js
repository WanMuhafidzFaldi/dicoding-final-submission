const AppServer = require('./src/config/server');
const appServer = new AppServer();
const port = 8080;
appServer.server.listen(port, () => {
    console.log('app-listen', `started, listening at ${port}`, 'initate application');
})
