const express = require("express");
const app = express();
const port = 8383;
const {db} = require("./firebase.js");

app.use(express.json());

app.listen(port, () => console.log(`Server has started on port: ${port}`));
