import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-gradient-to-r from-blue-200 to-blue-100 text-black py-8">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-lg font-semibold mb-2">AI Budget Planner</h2>
    <p className="text-sm mb-4">
      Simplify your finances. Plan smart. Save more. 💸
    </p>
    <div className="flex justify-center space-x-4">
      <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
      <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
      <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
    </div>
    <p className="text-xs mt-4 opacity-75">&copy; {new Date().getFullYear()} FinSight. All rights reserved.</p>
  </div>
</footer>

        </body>
      </html>
    </ClerkProvider>
  );
}
