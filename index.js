const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');
const interventionRoutes = require('./API/routeAPI/interventionRoutes'); // chemin correct

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/users', userRoutes);
app.use('/api/interventions', interventionRoutes);

// Connexion MongoDB et lancement serveur
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Connecté à MongoDB ');

    app.listen(PORT, () => {
      console.log(`🚀 Serveur lancé sur le port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Erreur de connexion à MongoDB :', err.message);
    process.exit(1);
  }
}

connectDB();
