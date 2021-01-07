const express = require("express");
const path = require('path');
let PORT = process.env.PORT || 8080;
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/BASE/index.html'));
  });

app.listen(PORT, () => {
    console.log(`${PORT}`);
  });