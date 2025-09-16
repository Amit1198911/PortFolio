import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import Link from "next/link";

export function ContactUs() {
  return (
    <div className="w-full mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center w-full h-full"
        >
        <div className="w-full flex flex-col px-5 sm:px-0 sm:flex-row justify-center gap-y-10 items-center">
            <div className="flex flex-col px-5 gap-y-10 sm:gap-y-20 sm:pl-27">
                <p className="font-semibold sm:pr-20">I am always open to discussing new opportunities, collaborations, or simply sharing knowledge. Feel free to reach out</p>
                <p className="text-xl font-extrabold">"Let’s connect and build something amazing together!"</p>
            </div>
            <div className="flex flex-row px-30 gap-x-10">
                <a href='https://github.com/Amit1198911'><FaGithub className="w-10 h-10 sm:h-15 sm:w-15"/></a>
               <a href='https://x.com/@AmitAhirwar1198'> <BsTwitterX className="w-10 h-10 sm:h-15 sm:w-15"/></a>
                <a href='mailto:amitahirwar1198911@gmail.com'><MdEmail className="w-10 h-10 sm:h-15 sm:w-15"/></a>
                <a href='https://www.linkedin.com/in/amitahirwar1198/'><GrLinkedin className="w-10 h-10 sm:h-15 sm:w-15"/></a>
            </div>
        </div>
      </Vortex>
    </div>
  );
}
