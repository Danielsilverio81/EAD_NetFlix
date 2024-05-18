import express from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
import { authController } from "./controllers/authController";
import { ensureAuth } from "./middlewares/auth";

const router = express.Router();

//auth end Points
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

//Categories end Points
router.get("/categories", ensureAuth, categoriesController.index);
router.get("/categories/:id", ensureAuth, categoriesController.Show);

//Courses end Points
router.get("/courses/featured", ensureAuth, coursesController.featured);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/search", ensureAuth, coursesController.search);
router.get("/courses/:id", ensureAuth, coursesController.show);

//Episodes end Points
router.get("/episodes/stream", episodesController.stream);

export { router };
