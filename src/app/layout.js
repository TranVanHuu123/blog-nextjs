import Navbar from "@/components/navbar/Navbar";
import "./globals.scss";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProdiver } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Technology",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProdiver>
          <AuthProvider>
            <div className="max-w-[1366px] min-h-[100vh] my-0 mx-auto py-0 px-14 flex flex-col justify-between">
              <Navbar></Navbar>
              {children}
              <Footer></Footer>
            </div>
          </AuthProvider>
        </ThemeProdiver>
      </body>
    </html>
  );
}
