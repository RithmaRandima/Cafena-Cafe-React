import "./App.css";
import AppBanner from "./components/AppBanner/AppBanner";
import Footer from "./components/AppBanner/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";
import Testimonials from "./components/Testimonials/Testimonials";
import AboutUs from "./components/AboutUS/AboutUs";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <WhereToBuy />
      <AboutUs />
      <Services />
      <Products />
      <Testimonials />
      <AppBanner />
      <Footer />
    </div>
  );
}

export default App;
