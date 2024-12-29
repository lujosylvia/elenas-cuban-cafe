import "./globals.css";
import Toolbar from "@/components/Toolbar/Toolbar";
import { inter } from "./fonts";
import { NextUIProvider } from "@nextui-org/system";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-[#F7F7F7] h-[100%] pb-[5rem]`}
      >

        <NextUIProvider>
        <Toolbar />
        {children}

    </NextUIProvider>
      </body>
    </html>
  );
}
