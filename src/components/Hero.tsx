import { ArrowRight } from 'lucide-react';
import logo from '../images/inuaa.jpg';

const Hero = () => {
  return (
    <section id="home" className="bg-kenya-gradient text-white py-20 md:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <img src={logo} alt="Inuaa Collective Logo" className="h-16 mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Building tokenized solutions
            </h1>
            <p className="text-xl text-white/80 max-w-lg">
              We build tokenized solutions.
            </p>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-white/20">
                <div className="flex justify-between mb-6">
                  <div className="h-16 w-16 rounded-full bg-kenya-magenta/80 flex items-center justify-center">
                    <span className="text-2xl font-bold">3+</span>
                  </div>
                  <div className="h-16 w-16 rounded-full bg-kenya-purple/80 flex items-center justify-center">
                    <span className="text-2xl font-bold">$20K</span>
                  </div>
                  <div className="h-16 w-16 rounded-full bg-kenya-magenta/80 flex items-center justify-center">
                    <span className="text-2xl font-bold">80%</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-center">
                  <div className="w-16">Tokenized solutions</div>
                  <div className="w-16">Tools/Resources</div>
                  <div className="w-16">Success Rate</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 h-40 w-40 rounded-full bg-gradient-to-br from-kenya-purple to-kenya-magenta opacity-30 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
