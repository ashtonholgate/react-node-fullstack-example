import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const port = 8080;

const data = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Betty" },
  { id: 3, name: "Chris" },
  { id: 4, name: "Danny" },
  { id: 5, name: "Evan" },
];

app.get("/", (req, res) => {
  res.json(data);
});

app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = data[id - 1];
  if (user === undefined) return res.status(404).send();
  res
    .json(data[id - 1]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
