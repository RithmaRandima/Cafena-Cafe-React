import "./App.css";
import AppBanner from "./components/AppBanner/AppBanner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import AboutUs from "./components/AboutUS/AboutUs";
import Products from "./components/Products/Products";
import News from "./components/News/News";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutUs />
      <Services />
      <AppBanner />
      <Products />
      <Testimonials />
      <News />
      <Footer />
    </div>
  );
}

export default App;
