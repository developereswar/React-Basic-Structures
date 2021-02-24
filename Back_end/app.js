const express = require('express');
const app = express();
const cors = require('cors');

const dbConfig = require('./configs/db_config')
dbConfig();

const cookieParser = require('cookie-parser');
app.use(cors({ origin: '*' }));
app.use(cookieParser());
app.use(express.json());
const appRoute = require('./router/route');
staticServe = express.static(`${ __dirname }/build`);


app.use("/", staticServe);


appRoute(app);

app.listen('8080');