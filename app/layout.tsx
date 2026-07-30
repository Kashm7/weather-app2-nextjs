import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Weather App",
  description: "My First Next.js Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <Footer />
      </body>
    </html>
  );
}