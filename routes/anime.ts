import { Router, Request, Response } from "express";

const animeRoutes = Router();

animeRoutes.post('/', (req: Request, res: Response) =>{
    res.json({
        message: 'crear anime listo'
    });
});

export default animeRoutes;