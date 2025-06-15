import { Router } from "express";
import { checkAuth, login, logOut, signUp } from "../controllers/auth.controller.js";
import protectedRoute from "../Middleware/protectedRoute.js";

const route = Router();

route.post("/signUp", signUp);
route.post("/login", login);
route.get("/logOut", logOut);
route.get("/checkAuth", protectedRoute, checkAuth);

export default route;