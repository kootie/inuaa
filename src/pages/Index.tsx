
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SuccessStories from '../components/SuccessStories';
import StartupCosts from '../components/StartupCosts';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  console.log("Index component rendering");
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SuccessStories />
        <StartupCosts />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
