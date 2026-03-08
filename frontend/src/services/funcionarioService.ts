const API_BASE_URL = 'http://localhost:3000/api';

export type Funcionario = {
    id: string;
    nome: string;
    idade: number;
    funcao: string;
    contratado_em: string;
}

export const listarFuncionarios = async (): Promise<Funcionario[]> => {
    const response = await fetch(`${API_BASE_URL}/funcionario`);
    if(!response.ok){
        throw new Error('Erro ao listar funcionários.');
    }
    return response.json();
}

export const criarFuncionario = async (novoFuncionario: Omit<Funcionario, 'id'>): Promise<Funcionario> => {
    const response = await fetch(`${API_BASE_URL}/funcionario`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoFuncionario),
    });

    if(!response.ok) {
        throw new Error('Erro ao criar funcionário');
    }
    return response.json();
} 

export const atualizarFuncionario = async (id:string, dados: Partial<Funcionario>): Promise<Funcionario> => {
    const response = await fetch(`${API_BASE_URL}/funcionario/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
    });

    if(!response.ok){
        throw new Error('Erro ao atualizar funcionário.');
    }
    
    return response.json();
}

export const excluirFuncionario = async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/funcionario/${id}`, {
        method: 'DELETE',
    });
    if(!response.ok) {
        throw new Error('Erro ao excluir funcionário.');
    }
}

