import { PrismaClient } from '@prisma/client';
import * as process from 'process';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany();
    const alice = await prisma.user.create({
        data: {
            fullname: "Alice White",
            password: "12345",
            email: 'alisce@prisma.io',
        },
    });

    console.log({ alice });
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
