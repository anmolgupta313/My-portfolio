import Footer from "@/Components/Footer/Footer";
import "./globals.css";
import { NavComponentDynamic } from "@/Components/Nav/NavDynamic/NavDynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <div className="flex">
           <NavComponentDynamic />
        {children}
        </div>
       
        <Footer />
      </body>
    </html>
  );
}
