const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config({ path: './config/.env' });

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/urls'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT -- ${PORT}`);
});