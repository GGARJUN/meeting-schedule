"use client";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="hidden lg:block">
        <Image
          src="/profile1.jpg"
          alt="profile"
          width={100}
          height={100}
          className="rounded-full h-[100px] object-cover absolute right-36"
        />
        <Image
          src="/profile2.jpg"
          alt="profile"
          width={100}
          height={100}
          className="rounded-full h-[100px] object-cover absolute top-48 left-16"
        />
        <Image
          src="/profile3.jpg"
          alt="profile"
          width={100}
          height={100}
          className="rounded-full h-[100px] object-cover absolute bottom-20 left-36"
        />
        <Image
          src="/profile4.jpg"
          alt="profile"
          width={100}
          height={100}
          className="rounded-full h-[100px] object-cover absolute right-16 bottom-32"
        />
      </div>
      <div className="text-center max-w-3xl">
        <h2 className="font-bold text-[60px] text-slate-700">
          Easy Scheduling ahead
        </h2>
        <h2 className="text-xl mt-5 text-slate-500">
          An effective meeting agenda will make team collaborationseem like a
          cakewalk. And when collaboration becomes easy, your team can focus on
          amping up their productivity and getting their creative juices
          flowing. With the help of a project management tool like ClickUp,
          writing effective meeting agendas …
        </h2>
        <div className="flex gap-4 flex-col mt-5">
          <h3 className="text sm">Sign Up free with Google and GitHub</h3>
          <div className="flex justify-center gap-8">
            <LoginLink>
              <Button className="p-7 flex gap-4">
                <Image src="/google .png" alt="Google" height={30} width={30} />
                Sign up with Google
              </Button>
            </LoginLink>
            <RegisterLink>
              <Button className="p-7 flex gap-4">
                <Image
                  src="/github.png"
                  alt="Facebook"
                  height={30}
                  width={30}
                />
                Sign up with GitHub
              </Button>
            </RegisterLink>
          </div>
          <hr />
          <h2>
            <RegisterLink>
              <Link href="" className="text-primary">
                Sign up Free with Email.
              </Link>
            </RegisterLink>
            No Credit Card required.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
