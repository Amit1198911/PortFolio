"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../../components/ui/lamp";
import { Cards } from "../../components/Cards";
import { GrReactjs } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import { SiCss3, SiExpress, SiMongodb } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";

export function Skills() {
    return (
        <LampContainer className="pt-110">
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                <div className="flex flex-col justify-center items-center gap-y-20 mt-50">
                    {/* Build lamps <br /> the right way */}
                    <div className="flex flex-row gap-x-10 sm:gap-x-30">
                        <ImHtmlFive className="sm:w-20 sm:h-20 text-amber-600" />
                        <SiCss3 className="sm:w-20 sm:h-20 text-blue-800 sm:text-blue-600" />
                        <FaJs className="sm:w-20 sm:h-20 text-amber-300" />
                        <GrReactjs className="sm:w-20 sm:h-20 text-blue-800 sm:text-blue-500" />
                        <RiTailwindCssFill className="sm:w-20 sm:h-20 text-blue-400" />
                    </div>
                    <div className="flex flex-row gap-x-10 sm:gap-x-30">
                        <DiNodejs className="sm:w-20 sm:h-20 text-emerald-600" />
                        <SiExpress className="sm:w-20 sm:h-20 text-white" />
                        <SiMongodb className="sm:w-20 sm:h-20 text-green-500" />
                        <RiNextjsFill className="sm:w-20 sm:h-20 text-black bg-white rounded-full" />
                        <BiLogoTypescript className="sm:w-20 sm:h-20 text-blue-400 bg-white rounded-lg" />
                    </div>

                </div>
            </motion.h1>

        </LampContainer>
    );
}
