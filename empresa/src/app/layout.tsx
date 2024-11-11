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
            <h1>Criar nova empresa</h1>
            {children}
          </div>
      </body>
    </html>
  );
}
