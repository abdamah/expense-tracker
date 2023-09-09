const express = require("express");
const config = require("config");

const app = express();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();

const PORT = process.env.PORT || config.get("port");

app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`));
