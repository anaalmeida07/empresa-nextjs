import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="fundo">
          <div className="menu">
              
            <Link href="/empresa/index">MENU</Link>  
            {children}
          </div>
      </body>
    </html>
  );
}
