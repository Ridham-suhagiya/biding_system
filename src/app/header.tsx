import { auth } from "@/auth";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SignIn } from "@/components/ui/signin";
import { SignOut } from "@/components/ui/signout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = async () => {
  const session = await auth();
  console.log(session?.user?.image);
  return (
    <div className="bg-gray-200 py-2 item-center">
      <div className="container flex justify-between">
        <div className="flex justify-end items-center gap-20 ">
          <Link
            href="/"
            className="hover:underline flex items-center justify-between gap-2"
          >
            <Image
              src="/logo.jpeg"
              width={50}
              height={50}
              alt="logo"
              className="rounded-full"
            />
            BidBuddy.com
          </Link>
          <Link
            href="/bid/create"
            className="hover:underline w-100 flex justify-start"
          >
            Post Item
          </Link>
        </div>
        <div className="flex items-center gap-5">
          {session?.user?.name && <div>Hi! {session?.user.name}</div>}
          {session?.user?.image ? (
            <details className="relative" id="user-logo-details">
              <summary>
                <Image
                  src={session.user.image}
                  alt="User Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </summary>
              <div className="absolute top-50 left-0 right-0">
                <SignOut />
              </div>
            </details>
          ) : (
            <SignIn />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
