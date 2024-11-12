import { Empresa } from "@/app/lib/definitions";
import Link from "next/link";

export default function Page() {
  return (
    <div id="delete" >
      <h1>Delete</h1>
      <Link href="/empresa/index">voltar</Link>
    </div>
  );
}
