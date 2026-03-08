import { useState, useEffect } from 'react';
import { listarFuncionarios, criarFuncionario, atualizarFuncionario, excluirFuncionario } from '../services/funcionarioService';
import type { Funcionario, FuncionarioInput } from '../types/funcionario.types';

export const useFuncionario = () => {
    const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string|null>(null);

    const fetchFuncionarios = async () => {
        setLoading(true);
        setError(null);

        try{
            const data = await listarFuncionarios();
            setFuncionarios(data);
        }catch(error){
            setError('Erro ao carregar funcionários');
            console.error(error);
        }finally{
            setLoading(false);
        }
    }
    
    const adicionarFuncionario = async (dados: FuncionarioInput) => {
        
        try{
            const novo = await criarFuncionario(dados);
            setFuncionarios([...funcionarios, novo]);
            return novo;
        }catch(error){
            setError('Erro ao adicionar funcionário');
            throw error;
        }
    }

    const removerFuncionario = async (id: string) => {
        try{
            await excluirFuncionario(id);
            setFuncionarios(funcionarios.filter(f => f.id !== id));
        }catch(error){
            setError('Erro ao remover funcionário.');
            throw error;
        }
    }

    useEffect(() => {
        fetchFuncionarios();
    },[]);

    return {
        funcionarios,
        loading,
        error,
        adicionarFuncionario,
        removerFuncionario,
        atualizarFuncionario,
        refresh: fetchFuncionarios
    }
}