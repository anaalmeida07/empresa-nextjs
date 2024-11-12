import { UpdateEmpresa } from "@/app/lib/actions";

export default async function UpdateForm({ empresa }: { empresa: any }) {
    const updateEmpresaWithId = UpdateEmpresa.bind(null, empresa.id)
    return (
        <form action={updateEmpresaWithId}>
            Nome: <input type="text" defaultValue={empresa.nome} id="id1" name="c1" required /><br />
            CNPJ: <input type="text" defaultValue={empresa.CNPJ} id="id2" name="c2" required /><br />
            Endereço: <input type="text" defaultValue={empresa.endereco} id="id3" name="c3" required /><br />
            Telefone: <input type="tel" defaultValue={empresa.telefone} id="id4" name="c4" required /><br />
            Quantidade de Funcionários: <input type="number" defaultValue={empresa.quantidade_funcionarios} id="id5" name="c5" required /><br />

            <button type="submit">Atualizar Empresa</button>
        </form>
    )
}