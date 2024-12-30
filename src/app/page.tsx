'use client'

import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
      <NextUIProvider>
      <main className="dark flex flex-col gap-8 row-start-2 items-center sm:items-start">
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
      </NextUIProvider>
  );
}
