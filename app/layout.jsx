import {Inter} from "@next/font/google"
import "@/styles/reset.css"
import "@/styles/globals.css"
import Header from "@/components/header";
import Footer from "@/components/footer";

const interFontFamily = Inter({subsets: ["latin"]});

const RootLayout = ({ children }) => {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <body className="container">
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  );
};

export default RootLayout;