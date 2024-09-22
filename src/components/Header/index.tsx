"use client";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="header left-0 top-0 z-40 flex w-full items-center absolute bg-transparent">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link href="/" className="header-logo block w-full py-8">
                <h1 className="font-bold lg:text-nowrap text-2xl">
                  Sait Al Shamal Contracting Company
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
