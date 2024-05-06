import express from "express";
import { sequelize } from "./database";
import { adminjs, adminjsRouter } from "./adminjs";
import dotenv from 'dotenv'
import { router } from "./routes";
dotenv.config()

const app = express();

app.use(express.static('public'))
app.use(adminjs.options.rootPath, adminjsRouter);
app.use(router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("DB connection successful");
  });
  console.log(
    `Server started successfully at port ${PORT} \n http://localhost:3000/`
  );
  console.log(`admin: http://localhost:3000/admin`);
  
});
