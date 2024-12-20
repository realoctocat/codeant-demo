import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeTogglebutton from "@/components/ui/ThemeToggle";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeAnt Demo",
  description: "CodeAnt Demo page with dashboard and signin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" >
          <ThemeTogglebutton className="absolute top-2 right-6" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
