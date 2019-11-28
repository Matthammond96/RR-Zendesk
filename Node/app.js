var express = require("express");
var app = express();

app.listen(3000, () => {
  console.log("server running on port 3000");
});

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type, authorization');
  next();
});

app.get("/url", (req, res, next) => {
  console.log(req);
  
  return res.status(200).send({
    success: 'true',
    body: {'Name': "Jim"}
  });
});

app.post("/users", (req, res, next) => {
  console.log(req);

  return res.status(200).send({
    success: 'true',
    body: {"Users":[{
      "id": 1,
      "name": "Matt"
    }, {
      "id": 2,
      "name": "Phil"
    }]
  }
  });
})

app.on('request', () => {
  console.log("a");
});