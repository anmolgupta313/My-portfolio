import Footer from "@/Components/Footer/Footer";
import "./globals.css";
import { NavComponentDynamic } from "@/Components/Nav/NavDynamic/NavDynamic";
import { Analytics } from "@vercel/analytics/react"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <div className="flex">
           <NavComponentDynamic />
        {children}
        <Analytics />
        </div>
       
        <Footer />
      </body>
    </html>
  );
}
