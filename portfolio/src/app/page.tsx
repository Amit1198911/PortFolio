import { About } from "@/app/about/About";
import { Cards } from "@/components/Cards";
import { ContactUs } from "@/app/contact/Contact";
import Profile from "@/app/profile/page";
import { Projects } from "@/app/projects/Projects";
import { Skills } from "@/app/skills/Skills";
import { Boxes } from "@/components/ui/background-boxes";
import Image from "next/image";
import { Profiler } from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="profile">
        <Profile />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
       <section id="skills">
         <Skills />
      </section>
      <section id="contact">
        <ContactUs />
      </section>

    </main>
  );
}
