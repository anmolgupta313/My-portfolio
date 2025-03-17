import About from "@/Components/about-me";
// import Meteors from "@/Components/Meteors/Meteors";
import StarsCanvas from "@/Components/Stars/Stars";
import dev from "../../public/dev.png";
import dev1 from "../../public/dev1.gif";
import Image from "next/image";
import Portfolio from "@/Components/portfolio";
import Resume from "@/Components/resume";
import Contact from "@/Components/contact";
import HomePage from "@/Components/Pages/Home";
export default function Home() {
  return (
    <div
      style={{ width: "100%", backgroundColor: "#000000", color: "white" }}
      className="grid grid-rows-[20px_1fr_20px] items-center  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative left-[3.7rem]">
        <HomePage />
        <div className="about-main-div-one main-div-pages">
          <About />
        </div>
        <div className="resume main-div-pages">
          <Resume />
        </div>
        <div className="portfolio main-div-pages">
          <Portfolio />
        </div>

        <div className="contact main-div-pages">
          <Contact />
        </div>
      </main>
    </div>
  );
}
