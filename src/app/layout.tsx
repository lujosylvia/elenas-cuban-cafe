import "./globals.css";
import Toolbar from "@/components/Toolbar/Toolbar";
import { inter } from "./fonts";
import { NextUIProvider } from "@nextui-org/system";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elena's Cuban Café",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased h-[100%] pb-[5rem]`}
      >

        <NextUIProvider>
        <Toolbar />
        {children}

    </NextUIProvider>
      </body>
    </html>
  );
}
