import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ProgressProvider, ThemeProvider } from "@/components/Providers";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import "react-quill-new/dist/quill.bubble.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NextWrite - Your Next Story Starts Here",
  description:
    "NextWrite is a sleek, minimal blogging platform built with Next.js. Write, edit, and manage your blogs effortlessly — your next story starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-gutter-stable"
      suppressHydrationWarning
    >
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <ProgressProvider>{children}</ProgressProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
