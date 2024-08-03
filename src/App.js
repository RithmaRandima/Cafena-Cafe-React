import "./App.css";
import AppBanner from "./components/AppBanner/AppBanner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import AboutUs from "./components/AboutUS/AboutUs";
import Products from "./components/Products/Products";
import News from "./components/News/News";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Newsletter />
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
