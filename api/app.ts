import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

const app : Express = express();
dotenv.config()

app.get('/',(req: Request,res:Response) => {
    res.json({
        err : false,
        msg : 'Running'
    })
})

export default app;