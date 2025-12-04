import Footer from "@/shared/components/Footer/Footer";
import Header from "@/shared/components/Header/Header";
import "@/shared/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main className="flex min-h-screen flex-col items-center bg-gray-100">
          <Header />

          <div className="flex w-full max-w-[1100px] flex-1">{children}</div>

          <Footer />
        </main>
      </body>
    </html>
  );
}
