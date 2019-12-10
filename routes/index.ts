import { Router } from "express";
import animeRoutes from "./anime";

const routes = Router();

routes.use('/anime', animeRoutes);

export default routes;