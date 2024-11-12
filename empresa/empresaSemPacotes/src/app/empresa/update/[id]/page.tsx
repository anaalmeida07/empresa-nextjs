import Link from "next/link";
import { FindEmpresa } from "@/app/lib/query";
import UpdateForm from "@/app/ui/empresa/update-form";

export default async function Page({ params }: { params: { id: string } }) {

    const { id } = params;
    const empresa = await FindEmpresa(Number(id));

    return (
        <div className="update">
            <h1>Update empresa com id = {id}</h1>
            <UpdateForm empresa={empresa} />
            <Link href="/empresa/index">voltar</Link>
        </div>
    )
}