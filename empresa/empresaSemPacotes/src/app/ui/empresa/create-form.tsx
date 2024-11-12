import { CreateEmpresa } from '@/app/lib/actions';

export default function CreateForm() {
    return (
        <form action={CreateEmpresa}>
            Nome: <input type="text" id="id1" name="c1" required /><br />
            CNPJ: <input type="text" id="id2" name="c2" required /><br />
            Endereço: <input type="text" id="id3" name="c3" required /><br />
            Telefone: <input type="text" id="id4" name="c4" required /><br />
            Quantidade de Funcionários: <input type="number" id="id5" name="c5" required /><br />
            <button type="submit">Cadastrar Empresa</button>
        </form>
    );
}
