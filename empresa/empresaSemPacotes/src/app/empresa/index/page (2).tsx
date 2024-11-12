import Link from "next/link";
import { IndexEmpresa } from "@/app/lib/query";
import IndexEmpresaUI from "@/app/ui/empresa/index-table";


export default  async function Page() {
  
  const empresa = await IndexEmpresa();

    return (
      <div id="index" >
        <Link href="/">Home</Link><br />
         <Link href="/empresa/create">Nova empresa</Link><br />
         <Link href="/empresa/delete">Deletar empresa</Link>    <br />
         <Link href="/empresa/update/">atualizar empresa</Link>  <br />
      <h1>Index</h1>
      </div>
    );
  }
  