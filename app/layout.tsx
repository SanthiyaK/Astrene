
import localFont from "next/font/local";
import "./globals.css";
import Header from '../components/Header'
import Footer from '../components/Footer'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "My Next.js App",
  description: "This is a sample Next.js application."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <title>{metadata.title}</title>
        {/*  <header>
          
            <main>{children}</main>
           
        </header> */}
       
       <Header />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
