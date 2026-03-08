import express, {Request, Response} from 'express';
import cors from 'cors';
import {homeRouter} from './routes/homeRoutes.js';
import {funcionarioRouter} from './routes/funcionarioRoutes.js';

const app = express();
const PORT = process.env.PORT || '3000';
const HOST = '0.0.0.0';

const allowedOrigins = [
    'http://localhost:5173' ,
    'https://crud-funcionario-git-main-paulo-anderson-limas-projects.vercel.app/',
    'https://crud-funcionario.vercel.app/'
]

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

app.use(express.json());

app.use('/api', funcionarioRouter);
app.use(homeRouter);

app.listen(Number(PORT), HOST, () => {
    console.log(`Application running on http://${HOST}: ${PORT}`);
})
