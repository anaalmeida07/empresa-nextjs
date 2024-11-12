
import Link from "next/link";
import CreateForm from '@/app/ui/empresa/create-form';


export default function Page() {
  return (
    <div id="create" >
    <h1>Create</h1>
    <CreateForm/>
    <Link href="/empresa/index">voltar</Link>
    </div>
  );
}
