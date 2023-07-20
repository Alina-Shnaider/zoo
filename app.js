require('@babel/register');
const express = require('express');
const path = require('path');
const ssr = require('./middleware/renderComponent');

// const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/views/index.route');
const app = express();

const PORT = 3000;
// serverConfig(app);
// const indexRoute = require('./routes/index.route');
app.use(ssr);
app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, './public')));
app.listen(PORT, () => console.log(`Сервер  пашет на  ${PORT} порту`));
