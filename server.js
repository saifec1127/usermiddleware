const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middlewares/ errorMiddleware');
const platterRouter = require('./routes/platterRoutes');
//const dailyUpdatesRouter = require('./routes/dailyUpdatesRoutes');
const dailyUpdatesRouter = require('./routes/dailyUpdatesRoutes'); 

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

// Connect to MongoDB
connectDB();

app.use('/api/users', userRoutes);
app.use('/api/platters', platterRouter )
//app.use('/api/dailyDatail', dailyUpdatesRouter )
app.use('/api/dailyUpdates', dailyUpdatesRouter); // Correct route path

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
