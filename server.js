const express = require("express");
const app = express();
const port = 8383;
const {db} = require("./firebase.js");

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
app.get("/employees", async (req, res) => {
  db.collection("per")
    .get()
    .then((querySnapshot) => {
      let employees = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        employees.push({...doc.data(), id: doc.id});
      });
      res.status(200).send(employees);
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
      res.status(400).send(error);
    });
});

/////// 3-UPDATE EMPLOYEE

/////// 4-DELETE EMPLOYEE

app.listen(port, () => console.log(`Server has started on port: ${port}`));
