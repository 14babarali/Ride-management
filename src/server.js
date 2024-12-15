// /server/server.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
 

dotenv.config();



const app = express();
app.use(morgan('dev')); 

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
