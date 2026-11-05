import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Expertise } from "@/components/expertise";
import { Education } from "@/components/education";
import { Consultation } from "@/components/consultation";
import { VideoSection } from "@/components/video-section";
import { Resources } from "@/components/resources";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Education />
      <Consultation />
      <VideoSection />
      <Resources />
      <Contact />
    </>
  );
}
