import { Contact, Footer } from "./components/About";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { NetworkBg } from "./components/NetworkBg";
import { PenCursor } from "./components/PenCursor";
import { Projects } from "./components/Projects";
import { ThemeProvider } from "./lib/theme";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg)] text-[var(--fg)] font-sans">
        <NetworkBg />
        <div className="grain" />
        <PenCursor />
        <Header />
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
