"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ProgressProvider as NextProgressProvider } from "@bprogress/next/app";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextProgressProvider options={{ showSpinner: false }} shallowRouting>
      {children}
    </NextProgressProvider>
  );
}
