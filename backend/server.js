const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { name: "Alejandro", lastName: "Neme", id: 1 },
    { name: "Pepito", lastName: "Perez", id: 2 },
    { name: "Lucio", lastName: "Pomarola", id: 3 }
  ];

  res.json(customers);
});
const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
