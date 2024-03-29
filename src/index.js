const express = require('express');

const expressConfigurator = require('./config/expressConfigurator');
const hbsConfigurator = require('./config/hbsConfigurator');
const dbConnect = require('./config/dbConfigurator');
const { PORT } = require('./config/utilsConfig');
const routes = require('./routes');

const app = express();

expressConfigurator(app);
hbsConfigurator(app);

dbConnect()
    .then(() => console.log('DB connected successfully!'))
    .catch(err => console.log(`DB Error: ${err}`));

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));