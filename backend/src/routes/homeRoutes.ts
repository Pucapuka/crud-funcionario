import express, {Router, Request, Response} from 'express';

const homeRouter = express.Router();

homeRouter.get("/", (req: Request, res: Response) => {
    res.json({"message": "Hello world!"});
});

export {homeRouter};