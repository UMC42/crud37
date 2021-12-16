const restrauntRoutes = require('./users');

const constructorMethod = (app) => {
  app.use('/users', restrauntRoutes);

  app.use('/', (req, res) => {
    res.render('create');
  });

  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;
