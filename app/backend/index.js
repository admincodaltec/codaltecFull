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

// Aumentar el límite de tamaño de carga útil
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

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

// Configurar rutas para servir archivos estáticos
app.use('/backend/public/images', express.static('./public/images'));
app.use('/backend/public/documents', express.static('./public/documents'));

app.get('/api', (req, res) => {
  res.send('Server ON!');
});

// Incluir las rutas de la API
routerApi(app);

// Middleware para manejo de errores
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// Iniciar el servidor
app.listen(port, () => {
  console.log('Mi port ' + port);
});
