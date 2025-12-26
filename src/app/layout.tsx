import "./globals.css";

export const metadata = {
  title: "System Design Arena",
  description: "Game-based system design practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
