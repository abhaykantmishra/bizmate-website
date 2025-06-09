import Image from "next/image";
import AboutUs from "./AboutUs";
import { Hero } from "./Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1700px] mx-auto flex-col">
      <Hero />
      <AboutUs />

    </main>
   
  );
}
