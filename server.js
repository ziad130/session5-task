
const express = require('express');
const connectDB = require('./db');
const bookRoutes = require('./bookroutes');
const book = require('./models/Book');
const app = express();
app.use(express.json());

connectDB();

app.use('/books', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
