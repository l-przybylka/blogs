// @ MIDDLEWARE

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./utils/config');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');

const app = express();
mongoose.set('strictQuery', false);

logger.info('connecting to', config.MOGNO_URI);

mongoose.connect(config.MOGNO_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

// @ ROUTES

const blogRoutes = require('./controllers/blogs');

app.use('/api/blogs', blogRoutes);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.use(cors());
app.use(express.json());

module.exports = app;
