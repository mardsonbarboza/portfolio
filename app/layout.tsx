import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mardson Barboza - Desenvolvedor Backend",
  description: "Desenvolvedor Backend especializado em Node.js, NestJS e AWS. Certificado AWS Cloud Practitioner com experiência em APIs escaláveis e arquiteturas limpas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
