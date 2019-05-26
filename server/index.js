const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

app = express();
app.use(bodyParser.json());
app.use(cors());




const port = 3052
app.listen(port, () => console.log(`Server listening on port ${port}`))