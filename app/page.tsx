import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Education } from "../components/sections/Education";
import { Experience } from "../components/sections/Experience";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import { Research } from "../components/sections/Research";
import { Skills } from "../components/sections/Skills";
import { profile } from "../data/site";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Hero
        name={profile.name}
        title={profile.title}
        summary={profile.summary}
        email={profile.email}
        phone={profile.phone}
        githubUrl={profile.githubUrl}
        linkedinUrl={profile.linkedinUrl}
      />
      <About summary={profile.summary} />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Education />
      <Contact />
    </div>
  );
}