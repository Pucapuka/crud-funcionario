export type Funcionario = {
    nome: string;
    idade: number;
    funcao: string;
    contratado_em: Date;
}

export type FuncionarioJson = {
    nome: string;
    idade: number;
    funcao: string;
    contratado_em: string;
}