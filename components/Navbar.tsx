import Link from "next/link";
import Image from "next/image";
import NavLogos from "./shared/Navlogos";
import { auth } from "@/auth";
import { getUserById } from "@/lib/actions/user.actions";

const Navbar = async () => {
  const session = await auth();
  console.log(session);

  const userInfo = await getUserById(session?.user?.id);
  return (
    <div className="w-full sticky top-0 bg-white h-24 shadow-lg shadow-black/40 z-[100]">
      <div className="w-full h-full flex items-center justify-between px-1.5 md:px-10 lg:px-14">
        <Link href={"/"}>
          <Image
            src="/logo.jpg"
            alt="logo"
            width={950}
            height={950}
            className="w-44 h-[50px] md:w-56 md:h-[66px] lg:w-72 lg:h-[72px]"
          />
        </Link>

        <NavLogos userInfo={userInfo} />
      </div>
    </div>
  );
};

export default Navbar;
