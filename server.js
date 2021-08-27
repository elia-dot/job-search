const express = require('express')
const app = express();
const jobRouter = require('./routes/jobRoute');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const connectDb = require('./config/db');

connectDb();

app.use(cors())
app.use(express.json())

app.use('/jobs', jobRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server Running on port ${PORT}`));
