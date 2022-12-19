const express = require("express");
const app = express();
const port = 8383;
const {db} = require("./firebase.js");

app.use(express.json());

/////// 1-CREATE EMPLOYEE
app.post("/addemployee", async (req, res) => {
  const personsRef = db.collection("per").doc();
  console.log(req.body);
  await personsRef
    .set(req.body)
    .then(() => {
      res.status(200).send(req.body);
    })
    .catch((error) => {
      console.log("Error adding documents: ", error);
      res.status(400).send(error);
    });
});

/////// 2-READ EMPLOYEES

/////// 3-UPDATE EMPLOYEE

/////// 4-DELETE EMPLOYEE

app.listen(port, () => console.log(`Server has started on port: ${port}`));
