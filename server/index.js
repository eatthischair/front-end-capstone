require('dotenv').config();
const express = require('express');
const cors = require('cors')
const path = require('path');
const qanda = require('./controllers/qanda.js')
const logger = require('./middleware/logger.js')

const app = express();

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${products[0].product_id}
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.urlencoded());

app.get('/questions', (req, res) => {
  qanda.getQuestionList(req.query.product_id, (results) => {
    res.send(results);
  });
});

app.listen(process.env.PORT);
console.log(`Server listening at aaaa http://localhost:${process.env.PORT}`);
