require('dotenv').config();
const express = require('express');
const cors = require('cors');
const applyRoute = require('./routes/apply');
const Connection = require('./dbConnection/dbconnection')
const authRoute = require('./routes/auth');
const auth = require('./middlewares/auth');
const addminchangeRoute = require('./routes/addminchange');


const app = express();

Connection();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoute)
app.use('/api', applyRoute);
app.use('/admin', auth)
app.use('/admin', addminchangeRoute);
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server listning it port ${PORT}`);
})