import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-stretch bg-black">
      <main className="w-full py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        <Hero />
        <About />
        <Skills />
        <ProjectsPreview />
        <Contact />
      </main>
    </div>
  );
}



