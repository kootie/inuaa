
import { Star } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Plate Palate",
      description: "USDC onboarding and payments for products",
      industry: "Ecommerce",
      stars: 5,
      result: "Live Platform"
    },
    {
      name: "Esclapian",
      description: "Blood Donation, Clinicians Platform, Continuous Education for Doctors, Public Information",
      industry: "HealthTech",
      stars: 4,
      result: "In Development"
    },
    {
      name: "ToknMatter",
      description: "Tokenized Commodities Predictions",
      industry: "FinTech",
      stars: 4,
      result: "In Development"
    },
    {
      name: "Gedowize",
      description: "Construction Materials on Chain",
      industry: "Construction",
      stars: 4,
      result: "In Development"
    },
    {
      name: "StableAfrika",
      description: "Currency Exchange and Stablecoins",
      industry: "Finance",
      stars: 4,
      result: "In Development"
    },
    {
      name: "Klunkaz",
      description: "NFT Cycling Insurance",
      industry: "Sports",
      stars: 4,
      result: "In Development"
    },
    {
      name: "Solarflow",
      description: "Machine to Machine Payments",
      industry: "Finance",
      stars: 4,
      result: "In Development"
    },
    {
      name: "InsuRax",
      description: "Hospital Cover Insurance",
      industry: "InsureTech",
      stars: 4,
      founder: "INUAA Team",
      result: "In Development"
    },
    {
      name: "GoldFund",
      description: "Crowd Funded Mining",
      industry: "Finance",
      stars: 4,
      founder: "INUAA Team",
      result: "In Development"
    },
    {
      name: "Tokenized Chikin",
      description: "Chikin on Chain",
      industry: "Food",
      stars: 4,
      founder: "INUAA Team",
      result: "In Development"
    },
  ];

  return (
    <section id="stories" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="animate-slide-up">Our Success Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-slide-up">
            We find problems to solve and build innovative solutions. We are a Tech Collective focused on blockchain, fintech, and emerging technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={story.name} 
              className="card-gradient animate-slide-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white">{story.name}</h3>
                  <p className="text-white/80 text-sm">Founded by {story.founder}</p>
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">
                  {story.industry}
                </span>
              </div>
              
              <p className="mb-6 text-white/90 italic">{story.description}</p>
              
              <div className="flex justify-between items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < story.stars ? "white" : "none"} 
                      className="text-white"
                    />
                  ))}
                </div>
                <div className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {story.result}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-secondary">
            Start Your Project With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
