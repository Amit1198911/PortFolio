"use client";
import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";
import { Avatar } from "../../components/Avatar";
import Profile from "../../../public/assets/Profile.png";
import tenant from "../../../public/assets/tenant.png";
import Wellnest from "../../../public/assets/wellnest.png";
import { Boxes } from "@/components/ui/background-boxes";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export function Projects() {

    const medicare = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        },
    ];
    const tenantNotes = [
        {
            id: 5,
            name: "Tyler Durden",
            designation: "Soap Developer",
            image: "https://images.seeklogo.com/logo-png/32/1/next-js-logo-png_seeklogo-321806.png",
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image: "https://logo.svgcdn.com/d/typescript-original.png",
        },
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image: "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png",
        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        },


    ];
    const astromeet = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image: "https://logo.svgcdn.com/l/redis.png",
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        },
    ];
    const wellnest = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
            id: 5,
            name: "Tyler Durden",
            designation: "Soap Developer",
            image: "https://logo.svgcdn.com/d/tailwindcss-original.png",
        },
        {
            id: 6,
            name: "Robert Johnson",
            designation: "Product Manager",
            image: "https://logo.svgcdn.com/l/react-router.png",
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        },
    ];
    return (
        <div className="min-h-screen w-full flex items-center justify-center ">
            <div className="flex flex-row flex-wrap py-40 items-center justify-center gap-y-60 gap-x-65">
                <PinContainer
                    title="Medicare"
                    href="https://github.com/Amit1198911/Medicare"
                    className="w-100 h-120 sm:h-120 sm:w-140"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full gap-y-5">
                        <div className="w-full">
                            <img src={`https://cdn.worldvectorlogo.com/logos/react-2.svg`} alt="Image" className="w-full h-80" />
                        </div>
                        <h3 className="max-w-xs  font-bold  text-base text-slate-100">
                            Medicare
                        </h3>
                        <div className="text-base m-0 pt-0 font-sm sm:font-normal">
                            <span className="text-slate-500 ">
                                A fullStack healthcare appointment booking web app.
                            </span>
                        </div>

                        <div className="flex flex-row mb-10 w-full">
                            <AnimatedTooltip items={medicare} />
                        </div>

                    </div>
                </PinContainer>
                <PinContainer
                    title="TenantNotes"
                    href="https://tenant-notes-c8lf.vercel.app/login"
                    className="w-100 h-120 sm:h-120 sm:w-140"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full sm:gap-y-3 gap-y-1">
                        <div className="w-full">
                            <img src={`https://images.seeklogo.com/logo-png/32/1/next-js-logo-png_seeklogo-321806.png`} alt="Image" className="w-full h-80" />
                        </div>
                        <h3 className="max-w-xs  font-bold  text-base text-slate-100">
                            TenantNotes
                        </h3>
                        <div className="text-base m-0 pt-0 font-sm sm:font-normal">
                            <span className="text-slate-500 ">
                                TenantNotes is a multi-tenant SaaS app for secure, isolated note management with role-based access and subscription control.
                            </span>
                        </div>
                        <div className="flex flex-row mb-10 w-full">
                            <AnimatedTooltip items={tenantNotes} />
                        </div>
                    </div>
                </PinContainer>
                <PinContainer
                    title="AstroMeet"
                    href="https://github.com/Amit1198911/AstroMeet"
                    className="w-100 h-120 sm:h-120 sm:w-140"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full sm:gap-y-3 gap-y-1">
                        <div className="w-full">
                            <img src={`https://logo.svgcdn.com/l/redis.png`} alt="Image" className="w-full h-80" />
                        </div>
                        <h3 className="max-w-xs  font-bold  text-base text-slate-100">
                            AstroMeet
                        </h3>
                        <div className="text-base m-0 pt-0 font-sm sm:font-normal">
                            <span className="text-slate-500 ">
                                Built a scalable backend for AstroMeet with user/astrologer management, real-time updates, and optimized response time from 40ms to 4ms.
                            </span>
                        </div>
                        <div className="flex flex-row mb-10 w-full">
                            <AnimatedTooltip items={astromeet} />
                        </div>
                    </div>
                </PinContainer>
                <PinContainer
                    title="Wellnest"
                    href="https://wellnest-zeta.vercel.app/"
                    className="w-100 h-120 sm:h-120 sm:w-140 gap-y-2"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full sm:gap-y-3 gap-y-1">
                        <div className="w-full ">
                            <img src={`https://cdn.worldvectorlogo.com/logos/react-2.svg`}  alt="Image" className="w-full h-80" />
                        </div>
                        <h3 className="max-w-xs  font-bold  text-base text-slate-100">
                            Wellnest
                        </h3>
                        <div className="text-base m-0 pt-0 font-sm sm:font-normal">
                            <span className="text-slate-500 ">
                                Developed Wellnest, a full-stack wellness app with JWT authentication, draft management, and auto-save features.
                            </span>
                        </div>
                        <div className="flex flex-row mb-10 w-full">
                            <AnimatedTooltip items={wellnest} />
                        </div>
                    </div>
                </PinContainer>



            </div>

        </div>

    );
}
