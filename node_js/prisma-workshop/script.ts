import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.user.findMany({
        where:{
            // "name":"123",
            id:{
                in:[2]
            }
        }
    });
    console.log(result);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());