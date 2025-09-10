"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Profile from '../../public/assets/Profile.png'
const people = [
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
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
   image: "https://logo.svgcdn.com/l/nextjs-icon.png",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png",
  },
];

export function Avatar() {
  return (
    <div className="flex flex-row mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
