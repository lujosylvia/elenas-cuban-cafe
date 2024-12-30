import "./globals.css";
import Toolbar from "@/components/Toolbar/Toolbar";
import { inter } from "./fonts";
import { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Elena's Cuban Café",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased h-[100vh] pb-[5rem]`}
      >
        <Providers>
          <Toolbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
