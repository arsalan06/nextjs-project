import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white, text-slate-900, antialiased", inter.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Provider>{children}
        {/*@ts-expect-error Server Component */}
        <Navbar/>
        </Provider>
        {/* Allow more height on mobile device */}
        <div className="h-40 md:hidden"/>
      </body>
    </html>
  );
}
