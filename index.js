const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8080;
const events = [
  {
    userId: 1,
    place: "Wormholes Allow Information to Escape Black Holes",
    name: "Check out this recent discovery about workholes",
    date: "2020-06-26T17:58:57.776Z",
    id: 1,
  },
  {
    userId: 1,
    place: "Wormholes Allow Information to Escape Black Holes",
    name: "Check out this recent discovery about workholes",
    date: "2020-06-26T17:58:57.776Z",
    id: 2,
  },
  {
    userId: 1,
    place: "Wormholes Allow Information to Escape Black Holes",
    name: "Check out this recent discovery about workholes",
    date: "2020-06-26T17:58:57.776Z",
    id: 3,
  },
];
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Express app (server)</h1>");
});
app.get("/events", (req, res) => {
  res.send(events);
});
app.post("/form", (req, res) => {
  console.log(req.body);
  const {value} = req.body
  res.send("success with value:" + value);
});

app.listen(PORT, console.log("server is running on port #:", PORT));
