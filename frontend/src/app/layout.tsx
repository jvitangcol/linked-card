import type { Metadata } from "next";
import { poppins } from "@/components/fonts";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import ReactQueryProvider from "@/app/ReactQueryProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | LinkCard",
    default: "LinkCard",
  },
  description: "Share your Details digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={`${poppins.className} antialiased`}>
        <ReactQueryProvider>
          <ThemeProvider
            attribute={"class"}
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster position="top-center" richColors />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
