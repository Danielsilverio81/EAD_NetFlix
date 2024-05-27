import express from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
import { authController } from "./controllers/authController";
import { ensureAuth, ensureAuthByQuery } from "./middlewares/auth";
import { favoriteController } from "./controllers/favoritesController";
import { likesController } from "./controllers/likesController";

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
router.get("/episodes/stream", ensureAuthByQuery, episodesController.stream);

//Favorites end Points
router.post("/favorites", ensureAuth, favoriteController.save);
router.get("/favorites", ensureAuth, favoriteController.index);
router.delete("/favorites/:id", ensureAuth, favoriteController.delete);

//Likes end Points
router.post("/likes", ensureAuth, likesController.save);

export { router };
