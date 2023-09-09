import './App.css';
import Header from './Components/Header/Header.jsx';
import Hero from './Components/Hero/Hero.jsx';
import HowItWorks from './Components/HowItWorks/HowItWorks.jsx';
import FeaturedJob from './Components/FeaturedJob/FeaturedJob.jsx';
import Category from './Components/Category/Category.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {

  return (
    <>
      <Header/>
      <Hero/>
      <HowItWorks/>
      <FeaturedJob/>
      <Category/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
