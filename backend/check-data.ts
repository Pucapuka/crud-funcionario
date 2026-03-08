import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    const count = await prisma.funcionario.count();
    console.log('📊 Total de funcionários no banco:', count);
    
    if (count > 0) {
      const funcionarios = await prisma.funcionario.findMany();
      console.log('📋 Primeiros 5 funcionários:');
      funcionarios.slice(0, 5).forEach(f => {
        console.log(`  - ${f.nome} (${f.funcao})`);
      });
    } else {
      console.log('❌ Nenhum funcionário encontrado!');
      console.log('💡 Dica: Rode o seed com: npm run seed');
    }
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main().catch(console.error);
