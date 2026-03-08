import express, {Request, Response} from 'express';
import cors from 'cors';
import {homeRouter} from './routes/homeRoutes.ts';
import {funcionarioRouter} from './routes/funcionarioRoutes.ts';

const app = express();
const PORT = process.env.PORT || '3000';

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

app.use(express.json());

app.use('/api', funcionarioRouter);
app.use(homeRouter);
app.listen(PORT, () => {
    console.log("Application running on port ", PORT);
})