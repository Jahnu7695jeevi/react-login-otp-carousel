require('dotenv').config(); // Load env vars
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use('/api', authRoutes);
app.use('/api', companyRoutes);


app.listen(5000, () => console.log('Server running on port 5000'));
