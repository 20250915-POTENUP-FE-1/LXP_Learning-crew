import Image from "next/image";
import React from "react";
import LogoImage from "../../../../public/logo.png";
import Link from "next/link";
import { ActionButton } from "../ActionButton";
import { cookies } from "next/headers";
import HeaderClient from "./HeaderClient";

const Header = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  return (
    <div className="flex h-16 w-full items-center justify-center">
      <header className="flex w-full max-w-[1100px] items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            className="h-10 w-[100px]"
            src={LogoImage}
            alt={"Learning Crew"}
          />
        </Link>

        <HeaderClient isLoggedIn={!!accessToken} />
      </header>
    </div>
  );
};

export default Header;
