"use client"

import "../../public/app/globals.css"
import { Header, Footer } from "@/widgets";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathName = usePathname()

  return (
    <html lang="en">
      <body>
        {pathName !== "/register" && <Header />}
        <main>{children}</main>
        {pathName !== "/register" && <Footer />}
      </body>
    </html>
  );
}
