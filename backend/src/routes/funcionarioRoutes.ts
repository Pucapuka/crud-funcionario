import { Router } from 'express';
import { 
    listarFuncionarios, 
    criarFuncionario, 
    excluirFuncionario, 
    editarFuncionario, 
    listarFuncionariosPorId 
} from '../controllers/funcionarioController.js';

const funcionarioRouter = Router();

// Rotas específicas PRIMEIRO
funcionarioRouter.get('/funcionario/search', listarFuncionariosPorId);  // Busca por query

// Rotas com parâmetro DEPOIS
funcionarioRouter.get('/funcionario/:id', listarFuncionariosPorId);     // Busca por ID na URL
funcionarioRouter.delete('/funcionario/:id', excluirFuncionario);
funcionarioRouter.put('/funcionario/:id', editarFuncionario);

// Rota genérica por ÚLTIMO
funcionarioRouter.get('/funcionario', listarFuncionarios);
funcionarioRouter.post('/funcionario', criarFuncionario);

export { funcionarioRouter };