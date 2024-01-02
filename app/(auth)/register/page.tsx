import RegisterForm from "@/components/shared/RegisterForm";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex items-center flex-col p-12 space-y-10">
      <span className="w-full flex items-center justify-start gap-1 text-gray-950 text-lg font-semibold font-sans">
        <Link href="/" className="font-medium text-gray-700">
          Home
        </Link>
        / Register
      </span>
      <h1 className="text-5xl font-bold font-sans text-gray-950">Register</h1>
      <div className="w-full h-auto md:h-[calc(100vh-225px)] flex items-center justify-center">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center px-3 md:px-0 lg:px-12 gap-6 md:gap-16">
          <RegisterForm />

          <hr className="h-px md:h-[89%] w-[96%] md:w-px border border-gray-950/25" />
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6">
            <span className="flex flex-col gap-1.5">
              <p className="text-xl font-semibold text-gray-950">
                Already have an account?
              </p>
              <p className="text-base font-medium text-gray-700">Login</p>
            </span>
            <Link
              href={"/login"}
              className={cn(
                buttonVariants({
                  variant: "default",
                  className:
                    "text-white bg-gray-950 w-[200px] rounded-[2px] transition duration-200",
                })
              )}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
