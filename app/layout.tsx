import "./globals.css";

export const metadata = {
  title: "Agenda do Vit",
  icons: {
    icon: [
      { url: "/vitlogo.jpg", type: "image/png" }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}