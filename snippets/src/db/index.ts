import { PrismaClient } from '@prisma/client';

const globalForPrisma=globalThis as unknown as {
  prisma: PrismaClient|undefined;
};

export const db=globalForPrisma.prisma ??new PrismaClient();

if (process.env.NODE_ENV !=="production") {
globalForPrisma.prisma =db;
}


// db.snippet.create({
//     data: {
//         title: 'Title',
//         code: 'const abc = 0 (t = 1)'
//     }
// })