import { PrismaClient } from ".prisma/client";
import { router } from "./routes";

import express from "express";
import { appendFile } from "fs";

app.use(express.json());
app.use(router);

app.listen(3030, () => console.log("Server listening on port 3030"));

const prisma = new PrismaClient();

class User {
  addUser;
}
