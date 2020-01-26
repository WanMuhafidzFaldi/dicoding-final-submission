const AppServer = require('./src/route/server');
const appServer = new AppServer();
const port = 8080;
appServer.server.listen(port, () => {
    const ctx = 'app-listen';
    console.log(ctx, `${appServer.server.name} started, listening at ${appServer.server.url}`, 'initate application');
});
