import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { TbMinusVertical } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOut } from "@/auth";

interface NavLogosParams {
  userInfo: UserInfo | null;
}

const NavLogos = ({ userInfo }: NavLogosParams) => {
  return (
    <div className="h-full hidden md:flex items-center gap-2">
      <FiSearch className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer hover:text-primary transition-all" />
      <TbMinusVertical className="h-8 w-8 opacity-25" />

      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <FaUser className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer hover:text-primary transition-all" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-center justify-center mt-6 z-[105] text-gray-950 shadow-lg shadow-gray-950/50 border border-gray-400">
          <DropdownMenuLabel className="text-gray-950 font-semibold text-base font-sans capitalize">
            {userInfo ? userInfo?.username : " My Account"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="w-[90%] bg-gray-950/30" />
          {userInfo ? (
            <>
              <DropdownMenuItem asChild>
                <Link
                  href={`/profile`}
                  className="w-full py-1 flex items-center justify-center text-sm font-medium text-gray-800 hover:bg-gray-900/10 transition-all cursor-pointer">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={`/shop`}
                  className="w-full py-1 flex items-center justify-center text-sm font-medium text-gray-800 hover:bg-gray-900/10 transition-all cursor-pointer">
                  Shop
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="w-[90%] bg-gray-950/30" />
              <DropdownMenuItem asChild>
                <form
                  className="py-2 w-full"
                  action={async () => {
                    "use server";

                    await signOut();
                  }}>
                  <Button
                    type="submit"
                    size={"sm"}
                    variant={"default"}
                    className="w-full bg-gray-900 rounded-sm hover:bg-gray-900/80 focus-visible:ring-0 transition-all">
                    Logout
                  </Button>
                </form>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem asChild>
                <Link
                  href={`/login`}
                  className="w-full py-1 flex items-center justify-center text-sm font-medium text-gray-800 hover:bg-gray-900/10 transition-all cursor-pointer">
                  Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={`/register`}
                  className="w-full py-1 flex items-center justify-center text-sm font-medium text-gray-800 hover:bg-gray-900/10 transition-all cursor-pointer">
                  Register
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={`/shop`}
                  className="w-full py-1 flex items-center justify-center text-sm font-medium text-gray-800 hover:bg-gray-900/10 transition-all cursor-pointer">
                  Shop
                </Link>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <TbMinusVertical className="h-8 w-8 opacity-25" />
      <FaCartShopping className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer hover:text-primary transition-all" />
    </div>
  );
};

export default NavLogos;
