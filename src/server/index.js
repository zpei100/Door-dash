const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
app.use(express.static(path.resolve(__dirname, '../../dist')))
app.listen(port, () => console.log('Server up on port 3000'));