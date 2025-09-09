// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http'); // Import the http module
require('dotenv').config();

// Routes
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Create server from express app
const server = http.createServer(app);

// Increase header size limit to handle large headers
server.maxHeadersCount = 1000;
// You can also increase header size if needed (Node.js 11.15+)
server.maxHeadersSize = 16384; // 16KB (default is 8KB)

// ---------------------
// Middlewares
// ---------------------
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Increase payload limit if needed
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ---------------------
// Test Route
// ---------------------
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ---------------------
// API Routes
// ---------------------
app.use('/api/users', userRoutes);

// ---------------------
// Error Handling Middleware (recommended)
// ---------------------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// ---------------------
// Connect MongoDB & Start Server
// ---------------------
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Connected to MongoDB');

    // Start the server we created with http.createServer
    server.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
}

connectDB();