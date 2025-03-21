import About from "@/Components/Pages/About/about-me";
import Portfolio from "@/Components/Pages/Portfolio/portfolio";
import Contact from "@/Components/Pages/Contact/contact";
import HomePage from "@/Components/Pages/Home/Home";
import Resume from "@/Components/Pages/Experience/resume";

export const metadata = {
  title: "Anmol Gupta Portfolio",
  description:
    "Anmolgupta.ca: Frontend Developer - the art, the science, and the passion.",
};

export default function Home() {
  return (
    <div
      style={{ width: "100%", backgroundColor: "#000000", color: "white" }}
      className="sm:grid grid-rows-[20px_1fr_20px] items-center  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
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
