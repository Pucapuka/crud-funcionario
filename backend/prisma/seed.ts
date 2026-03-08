import { PrismaClient } from '../src/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import mockData from '../src/mock/mockData.json' with { type: "json"};
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main(){
    console.log(`Iniciando o seed com ${mockData.length} funcionários...`);

    for (const item of mockData){
        if(!item.nome || !item.idade || !item.funcao || !item.contratado_em){
            console.warn('Item inválido pulado:', item);
            continue;
        }

        await prisma.funcionario.create({
            data: {
                nome: item.nome,
                idade: Number(item.idade),
                funcao: item.funcao,
                contratado_em: new Date(item.contratado_em)  
            }
        });
        console.log(`${item.nome} adicionado`);
    }

    console.log(`Seed concluído com sucesso`);
}

main()
    .catch((error) => {
        console.error(`Erro durante o seed: ${error}`);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        await pool.end();
        console.log('Conexão com banco fechada');
    });