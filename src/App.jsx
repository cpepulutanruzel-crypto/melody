import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HouseInfo from "./components/HouseInfo";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HouseInfo />
        <Features />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;