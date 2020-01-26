
const restify = require('restify');

function AppServer() {
    this.server = restify.createServer({
        name: 'dicoding final submission',
        version: 'v1'
    });

    this.server.serverKey = '';
    this.server.use(restify.plugins.acceptParser(this.server.acceptable));
    this.server.use(restify.plugins.queryParser());
    this.server.use(restify.plugins.bodyParser());
    this.server.use(restify.plugins.authorizationParser());

    // anonymous can access the end point, place code bellow
    this.server.get('/', (req, res) => {
        res.send("Wan Uhafidz Faldi")
    });
}

module.exports = AppServer;
