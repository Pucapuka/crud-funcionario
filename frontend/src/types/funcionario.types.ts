export interface Funcionario {
    id: string;
    nome: string;
    idade: number;
    funcao: string;
    contratado_em: string;
}

export type FuncionarioInput = Omit<Funcionario, 'id'>

export interface FuncionarioFormData {
    nome: string;
    idade: number | '';
    funcao: string;
    contratado_em: string;
}