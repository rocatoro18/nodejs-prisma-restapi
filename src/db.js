import pkg from '@prisma/client';      // cambio clave
const { PrismaClient } = pkg;

export const prisma = new PrismaClient();