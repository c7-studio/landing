import React from "react";
import Head from "next/head";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Marqui from "../components/Marqui";
import Marqui2 from "../components/Marqui2";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero />
      <Marqui />
      <Services />
      <Projects />
      <Marqui2 />
      <Contact />
    </div>
  );
}
