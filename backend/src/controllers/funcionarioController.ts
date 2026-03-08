import { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { Funcionario, FuncionarioJson } from '../models/Funcionario.js';

// Funções auxiliares para validação
const getParamId = (params: any): string | undefined => {
    return params.id;
};

export const listarFuncionarios = async (req: Request, res: Response) => {
    try {
        const funcionarios = await prisma.funcionario.findMany();
        res.status(200).json(funcionarios);
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
};

export const listarFuncionariosPorId = async (req: Request, res: Response) => {
    try {
        const id = getParamId(req.params);
        
        if (!id) {
            return res.status(400).json({ erro: "ID não fornecido" });
        }

        const funcionario = await prisma.funcionario.findUnique({
            where: { id }
        });

        if (!funcionario) {
            return res.status(404).json({ mensagem: "Funcionário não encontrado" });
        }

        res.status(200).json(funcionario);
    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

export const criarFuncionario = async (req: Request, res: Response) => {
    try {
        const { nome, idade, funcao, contratado_em } = req.body;

        if (!nome || !idade || !funcao || !contratado_em) {
            return res.status(400).json({ erro: "Todos os campos devem ser preenchidos" });
        }

        const novoFuncionario = await prisma.funcionario.create({
            data: {
                nome,
                idade: Number(idade),
                funcao,
                contratado_em: new Date(contratado_em)
            }
        });

        res.status(201).json({
            mensagem: "Novo funcionario adicionado",
            funcionario: novoFuncionario
        });
    } catch (error) {
        res.status(500).json({ erro: "Erro interno do servidor" });
    }
};

export const excluirFuncionario = async (req: Request, res: Response) => {
    try {
        const id = getParamId(req.params);
        
        if (!id) {
            return res.status(400).json({ erro: "ID não fornecido" });
        }

        await prisma.funcionario.delete({
            where: { id }
        });

        res.status(200).json({
            mensagem: "Funcionário removido com sucesso!",
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro interno do servidor."
        });
    }
};

export const editarFuncionario = async (req: Request, res: Response) => {
    try {
        const id = getParamId(req.params);
        const dados = req.body;

        if (!id) {
            return res.status(400).json({ erro: "ID não fornecido" });
        }

        const funcionarioEditado = await prisma.funcionario.update({
            where: { id },
            data: dados
        });

        res.status(200).json({
            mensagem: "Funcionário editado com sucesso",
            funcionario: funcionarioEditado
        });
    } catch (error) {
        res.status(500).json({ erro: "Erro interno do servidor" });
    }
};
