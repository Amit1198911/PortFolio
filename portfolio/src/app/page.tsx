import { Cards } from "@/components/Cards";
import { ContactUs } from "@/components/Contact";
import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Project";
import { Boxes } from "@/components/ui/background-boxes";
import Image from "next/image";
import { Profiler } from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
     <Profile/>
     <Cards/>
     <ContactUs/>
    </main>
  );
}
