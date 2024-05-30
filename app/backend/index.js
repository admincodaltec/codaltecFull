const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const bodyParser = require('body-parser');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const options = {
  origin: (origin, callback) => {
    callback(null, true);
    // if (whitelist.includes(origin) || !origin) {
    //   callback(null, true);
    // } else {
    //   callback(new Error('no permitido'));
    // }
  },
};
app.use(cors(options));

app.use('/backend/public/images', express.static('./public/images'));
app.use('/backend/public/documents', express.static('./public/documents'));

app.get('/api', (req, res) => {
  res.send('Server ON!');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
