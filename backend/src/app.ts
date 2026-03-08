import express, {Request, Response} from 'express';
import cors from 'cors';
import {homeRouter} from './routes/homeRoutes.js';
import {funcionarioRouter} from './routes/funcionarioRoutes.js';

const app = express();
const PORT = process.env.PORT || '3000';
const HOST = '0.0.0.0';

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

app.use(express.json());

app.use('/api', funcionarioRouter);
app.use(homeRouter);

app.listen(Number(PORT), HOST, () => {
    console.log(`Application running on http://${HOST}: ${PORT}`);
})
