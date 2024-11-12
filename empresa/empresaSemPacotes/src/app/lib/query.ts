import prisma from './prisma'

export async function IndexEmpresa() {
    return await prisma.empresa.findMany();
}

export async function FindEmpresa(id:number) {
    return await prisma.empresa.findUnique({where:{id:id}});   
}