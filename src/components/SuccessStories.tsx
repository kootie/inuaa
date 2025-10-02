
import { Star } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Reloop",
      description: "\"E-waste Management.\"",
      industry: "Technology",
      stars: 5,
    },
    {
      name: "Plate Palate",
      description: "\"USDC onboarding and payments for products.\"",
      industry: "Ecommerce",
      stars: 5,
    },
    {
      name: "Esclapian",
      description: "\"Blood Donation, Clinicians Platfrom , Continuos Education for Doctors, Public Information.\"",
      industry: "HealthTech",
      stars: 4,
    },
    {
      name: "ToknMatter",
      description: "\"Tokenized Commdotites Predictions.\"",
      industry: "HealthTech",
      stars: 4,
    },
    {
      name: "Gedowize",
      description: "\"Construction Materials on Chain.\"",
      industry: "Construction",
      stars: 4,
    },
    {
      name: "StableAfrika",
      description: "\"Currency Exchange and Stablecoins.\"",
      industry: "Finance",
      stars: 4,
    },
    {
      name: "Klunkaz",
      description: "\"NFT cycling insurance.\"",
      industry: "Sports",
      stars: 4,
    },
    {
      name: "Solarflow",
      description: "\"Machine to Machine Payments.\"",
      industry: "Finance",
      stars: 4,
    },
    {
      name: "InsuRax",
      description: "\"Hospital Cover.\"",
      industry: "Insuretech",
      stars: 4,
    },
    {
      name: "GoldFund",
      description: "\"Crowd Funded Mining.\"",
      industry: "Finance",
      stars: 4,
    },
    {
      name: "Civic Trust",
      description: "\"Tracking Government Projects.\"",
      industry: "Governance",
      stars: 4,
    },
    {
      name: "Tokenized Chikin",
      description: "\"Chikin on Chain.\"",
      industry: "Food",
      stars: 4,
    },
  ];

  return (
    <section id="stories" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="animate-slide-up">May, June, July List</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-slide-up">
            We find problems to solve and build solutions for. We are a Tech Collective.
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
            Join the August, September , October List
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
