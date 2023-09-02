const mongoose = require('mongoose');

const connection = 'mongodb://127.0.0.1:27017/ICAN';//Url

// Connect to MongoDB
mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Export the database connection for use in other files
module.exports = db;
