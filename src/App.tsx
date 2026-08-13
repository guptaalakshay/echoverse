import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features";
import Artists from "./components/Artists";
import Community from "./components/Community";
import Premium from "./components/Premium";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="aurora" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <Features />
        <Artists />
        <Community />
        <Premium />
      </main>

      <Footer />
    </>
  );
}

export default App;