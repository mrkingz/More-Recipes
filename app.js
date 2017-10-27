import express from 'express';

import logger from 'morgan';

import bodyParser from 'body-parser';

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

app.all('/api', (req, res) => {
  res.status('200').send('Connection ok');
});
module.exports = app;

