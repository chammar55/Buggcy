import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { House } from "lucide-react";
import DarkModeButton from "./DarkModeButton";

function Navbar() {
  return (
    <div
      className="bg-zinc-100 py-2 border-b border-s-zinc-200 w-full z-10
    fixed top-0   "
    >
      <div className=" container flex items-center justify-between ">
        <Link className="text-black " href="/">
          <House />
        </Link>
        <Link className={buttonVariants()} href="/sign-in">
          Sign in
        </Link>
        <DarkModeButton />
      </div>
    </div>
  );
}

export default Navbar;
