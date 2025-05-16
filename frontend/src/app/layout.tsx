import type { Metadata } from "next";
import { poppins } from "@/components/fonts";
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
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
