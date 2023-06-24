const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bodyparser = require("body-parser");


const cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

const PORT = process.env.PORT || 9090;
const appRouter = require('./routes/index')
app.use(appRouter)

app.use(bodyparser.json());

app.listen(PORT, () => {
  console.log(`server running succesfully on ${PORT}!`);

});