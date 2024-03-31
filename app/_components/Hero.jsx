import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center my-20">
        <div className="hidden lg:block">
            <Image src="/profile1.jpg" alt="profile" width={100} height={100} className="rounded-full h-[100px] object-cover absolute right-36" />
            <Image src="/profile2.jpg" alt="profile" width={100} height={100} className="rounded-full h-[100px] object-cover absolute top-48 left-16" />
            <Image src="/profile3.jpg" alt="profile" width={100} height={100} className="rounded-full h-[100px] object-cover absolute bottom-20 left-36" />
            <Image src="/profile4.jpg" alt="profile" width={100} height={100} className="rounded-full h-[100px] object-cover absolute right-16 bottom-32" />
        </div>
      <div className="text-center max-w-3xl">
        <h2 className="font-bold text-[60px] text-slate-700">
          Easy Scheduling ahead
        </h2>
        <h2 className="text-xl mt-5 text-slate-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          optio fuga alias nostrum soluta, impedit odit a molestias, vel ipsum
          voluptas sit molestiae sed tempora ullam, corrupti omnis qui rem?
        </h2>
        <div className="flex gap-4 flex-col mt-5">
          <h3 className="text sm">Sign Up free with Google and GitHub</h3>
          <div className="flex justify-center gap-8">
            <Button className="p-7 flex gap-4">
              <Image src="/google .png" alt="Google" height={30} width={30} />
              Sign up with Google
            </Button>
            <Button className="p-7 flex gap-4">
              <Image src="/github.png" alt="Facebook" height={30} width={30} />
              Sign up with GitHub
            </Button>
          </div>
          <hr />
          <h2>
            <Link href="" className="text-primary">
              Sign up Free with Email.
            </Link>
            No Credit Card required.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
