import Footer from "@/shared/components/Footer/Footer";
import Header from "@/shared/components/Header/Header";
import "@/shared/styles/globals.css";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main className="flex min-h-screen flex-col items-center bg-white text-black">
          <Header />

          <div className="flex w-full max-w-[1100px] flex-1">{children}</div>

          <div className="absolute">{modal}</div>

          <Footer />
        </main>
      </body>
    </html>
  );
}
