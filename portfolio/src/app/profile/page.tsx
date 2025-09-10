"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { CometCard } from "../../components/ui/comet-card";
import { CometCardDemo } from "../../components/CometCardDemo";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { ContainerTextFlip } from "../../components/ui/container-text-flip";
import { Cards } from "../../components/Cards";
import { Projects } from "../projects/Projects";

export default function Profile() {
    const topwords = "Hi  I’m Amit";
    const mdwords = " Developer";
    const lwwords = `"Turning ideas into scalable and user-friendly web applications using Next.js, Node.js, and MongoDB."`;

    return (
        <div className="min-h-screen relative overflow-hidden w-full  bg-slate-900 flex flex-col items-center justify-center rounded-lg pb-10 sm:pb-0">
            <div className="absolute inset-0 w-full h-full  bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <div className='flex flex-col sm:flex-row justify-between sm:gap-x-50 items-center sm:pl-60'>
                {/* Picture */}
                <div className='relative z-20 mt-12 sm:mt-10'>
                    <CometCardDemo />
                </div>
                {/* Content */}
                <div className='flex flex-col relative z-20 pl-10 px-5 sm:px-10 gap-y-3 sm:gap-y-6 justify-center'>
                    <TextGenerateEffect words={topwords} className="text-5xl" />

                    <ContainerTextFlip
                        words={["Frontend  Developer", "Backend  Developer", "Fullstack  Developer"]}
                        className="md:text-5xl justify-center py-5"
                    />

                    <TextGenerateEffect words={lwwords} className="text-lg" />

                </div>
            </div>

        </div>
    );
}
