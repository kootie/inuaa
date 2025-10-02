
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProgramAreas from '../components/ProgramAreas';
import SuccessStories from '../components/SuccessStories';
import StartupCosts from '../components/StartupCosts';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProgramAreas />
        <SuccessStories />
        <StartupCosts />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
