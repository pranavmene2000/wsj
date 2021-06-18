const express = require('express');
const compression = require('compression');
const cors = require('cors')

const app = express();

const {
    businessController,
    entertainmentController,
    generalController,
    healthController,
    opinionsController,
    politicsController,
    realEstatesController,
    marketsController,
    unitedStatesController,
    technolofyController,
    sportsController
} = require('./controllers');

app.use(cors())
app.use(compression())

app.get('/', (req, res) => res.json({ Name: 'Testing Route' }))
app.get('/business', businessController)
app.get('/politics', politicsController)
app.get('/entertainment', entertainmentController)
app.get('/general', generalController)
app.get('/health', healthController)
app.get('/sports', sportsController)
app.get('/tech', technolofyController)
app.get('/science', businessController)
app.get('/us', unitedStatesController)
app.get('/markets', marketsController)
app.get('/realestates', realEstatesController)
app.get('/opinions', opinionsController)

const PORT = process.env.PORT || 5000;
console.log(PORT)

app.listen(PORT, () => {
    console.log(`Server is running on PORT No. ${PORT}`);
})