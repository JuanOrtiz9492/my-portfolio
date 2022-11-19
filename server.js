/* eslint-disable */
const express = require('express');
const path = require('path');
const app = express(); //Line 2
const port = process.env.PORT || 4521;

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'build', 'static')));

app.listen(port, () => console.log(`Listening on port ${port}`));
