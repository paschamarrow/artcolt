const express = require("express");
const port = 8000;

express()
  .get("/", (req, res) => {
    res.send("Hello World!");
    //change line 7 to standard res.status(200)
  })

  .listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
