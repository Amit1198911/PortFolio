"use client";
import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { CometCardDemo } from "../../components/CometCardDemo";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { ContainerTextFlip } from "../../components/ui/container-text-flip";
import { Button } from "../../components/ui/stateful-button";
import { FaDownload } from "react-icons/fa";

export function About() {
    const handleClick = () => {
        return new Promise((resolve) => {
    setTimeout(() => {
      // Create a hidden link
      const link = document.createElement("a");
      link.href = "/assets/Resume.pdf"; // Path from public
      link.download = "Resume.pdf"; // File name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      resolve("Downloaded");
    }, 4000); // ⏳ waits 4 seconds before starting download
  });
    };
    const topwords = "Hello! My name is Amit Ahirwar, and I am a final-year student and passionate Full-Stack Developer. I enjoy building clean, efficient, and scalable web applications that solve real-world problems.";
    const mdwords = "With hands-on experience in both frontend and backend development, I specialize in creating modern, user-friendly interfaces and robust server-side systems.";
    const lwwords = `"I believe in continuous learning and love turning ideas into impactful digital solutions."`;
    return (
        <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div>
                <div className='flex flex-col-reverse  sm:flex-row justify-between sm:gap-x-50 items-center sm:pl-20 sm:pr-30 px-10 py-10'>

                    {/* Content */}
                    <div className='flex flex-col relative z-20 px-0 sm:px-10 gap-y-5 sm:gap-y-3 justify-center'>
                        <TextGenerateEffect words={topwords} className="text-lg" />
                        <TextGenerateEffect words={mdwords} className="text-lg" />
                        <TextGenerateEffect words={lwwords} className="text-lg" />
                        <Button onClick={handleClick} className="w-30 h-10 mt-5 bg-gray-800 flex flex-row"><p>
                            Resume</p>
                        </Button>

                    </div>
                    {/* Picture */}
                    <div className='relative z-20 mt-12 sm:mt-10'>
                        <CometCardDemo />
                    </div>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}
