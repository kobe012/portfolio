import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
}
