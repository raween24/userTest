const interventionRoutes = require('./routeAPI/interventionRoutes');

// Ajouter après userRoutes
app.use('/api/interventions', interventionRoutes);
