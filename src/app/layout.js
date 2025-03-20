
import Nav from "@/Components/Nav/Nav";
import "./globals.css";
import { NavComponentDynamic } from "@/Components/Nav/NavDynamic/NavDynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <NavComponentDynamic />
        {children}
      </body>
    </html>
  );
}
