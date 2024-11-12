'use server';

import prisma from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function CreateEmpresa(formData: FormData) {
    const obj: any = {
        nome: formData.get("c1"),
        CNPJ: formData.get("c2"),
        endereco: formData.get("c3"),
        telefone: formData.get("c4"),
        qtdFuncionarios: Number(formData.get("c5"))
    };

    const res = await prisma.empresa.create({ data: obj });

    revalidatePath('/empresa/index');
    redirect('empresa/index');
}


export async function UpdateEmpresa(id:number, formData: FormData) {
    const obj: any = {
        nome: formData.get("c1"),
        CNPJ: formData.get("c2"),
        endereco: formData.get("c3"),
        telefone: formData.get("c4"),
        qtdFuncionarios: Number(formData.get("c5"))
    };

    const res = await prisma.empresa.update({ where:{id:id}, data: obj });

    revalidatePath('/empresa/index');
    redirect('empresa/index');
}
