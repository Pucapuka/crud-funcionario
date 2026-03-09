import express, {Request, Response} from 'express';
import cors from 'cors';
import {homeRouter} from './routes/homeRoutes.js';
import {funcionarioRouter} from './routes/funcionarioRoutes.js';

const app = express();
const PORT = process.env.PORT || '3000';
const HOST = '0.0.0.0';

const allowedOrigins = [
    'http://localhost:5173' ,
    'https://crud-funcionario.vercel.app'
]

app.use(cors({
    origin: (origin, callback) => {
        // Permite requisições sem origem (Postman, etc.) ou se a origem estiver na lista
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log('🚫 Bloqueado pelo CORS:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true // 👈 Importante se usar cookies/autenticação
}));

app.use(express.json());

app.use('/api', funcionarioRouter);
app.use(homeRouter);

app.listen(Number(PORT), HOST, () => {
    console.log(`Application running on http://${HOST}: ${PORT}`);
    console.log(`📡 API disponível em /api/funcionario`);
    console.log(`🌐 Origens permitidas:`, allowedOrigins);
})
