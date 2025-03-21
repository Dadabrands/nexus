import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Speakers from "./components/sections/Speakers";
import Agenda from "./components/sections/Agenda";
import WhyAttend from "./components/sections/WhyAttend";
import Testimonials from "./components/sections/Testimonials";
import Register from "./components/sections/Register";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Agenda />
        <WhyAttend />
        <Testimonials />
        <Register />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;