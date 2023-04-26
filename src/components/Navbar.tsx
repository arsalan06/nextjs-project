// "use client"; // this is a client component
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FC } from "react";
import Button, { buttonVariants } from "@/ui/Button";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";
interface NavbarProps {}

const Navbar = async ({}) => {
  const session = await getServerSession();
  return (
    <div className="w-screen fixed backdrop-blur-sm bg-white dark:bg-slate-900 z-50 top-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-center">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          Text Similarity 1.0
        </Link>
        <div className="md:hidden">
          {/* <ThemeToggle /> */}
        </div>
        <div className="hidden md:flex gap-4">
          {/* <ThemeToggle /> */}
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>
          {session ? (
            <>
              <Link
                href="/dashboard"
                className={buttonVariants({ variant: "ghost" })}
              >
                Dashboard
              </Link>
              <SignOutButton/>
            </>
          ) : (
            <SignInButton/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
