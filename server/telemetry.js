const express = require("express");
const app = express();
app.use(express.json());

app.post("/telemetry", (req, res) => {
  console.log("Telemetry event:", req.body);
  // Save to database or analytics pipeline here
  res.sendStatus(200);
});

app.listen(3000, () => console.log("Telemetry server running on port 3000"));
