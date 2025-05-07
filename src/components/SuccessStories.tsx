
import { Star } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Inuaa Collective",
      founder: "Jane & Janice",
      description: "\"Startup building, Training Social Media.\"",
      industry: "Technology",
      result: "Launch",
      stars: 5,
    },
    {
      name: "USDC Beacons",
      founder: "Fabian Owuor",
      description: "\"USDC onboarding and payments for products.\"",
      industry: "Ecommerce",
      result: "Base Builds",
      stars: 5,
    },
    {
      name: "Esclapian",
      founder: "Mercy Gatonye",
      description: "\"Blood Donation, Clinicians Platfrom , Continuos Education for Doctors, Public Information.\"",
      industry: "HealthTech",
      result: "YODH",
      stars: 4,
    },
    {
      name: "ToknMatter",
      founder: "Austine Chisutia",
      description: "\"Tokenized Commdotites Predictions.\"",
      industry: "HealthTech",
      result: "Skale",
      stars: 4,
    },
    {
      name: "Jengawize",
      founder: "Jane Maina",
      description: "\"Construction Materials on Chain.\"",
      industry: "Construction",
      result: "Base",
      stars: 4,
    },
    {
      name: "IDXR",
      founder: "Fabian Owuor",
      description: "\"Collaterized Insurance.\"",
      industry: "Insuretech",
      result: "Hackathon",
      stars: 4,
    },
    {
      name: "StableAfrika",
      founder: "Fabian Owuor",
      description: "\"Currency Exchange and Stablecoins.\"",
      industry: "Finance",
      result: "Zambia",
      stars: 4,
    },
    {
      name: "Klunkaz",
      founder: "Fabian Owuor",
      description: "\"NFT cycling insurance.\"",
      industry: "Sports",
      result: "Kenya",
      stars: 4,
    },
    {
      name: "Solarflow",
      founder: "Fabian Owuor",
      description: "\"Machine to Machine Payments.\"",
      industry: "Finance",
      result: "Kenya",
      stars: 4,
    },
    {
      name: "InsuRax",
      founder: "Fabian Owuor",
      description: "\"Hospital Cover.\"",
      industry: "Insuretech",
      result: "Kenya",
      stars: 4,
    },
    {
      name: "GoldFund",
      founder: "Fabian Owuor",
      description: "\"Crowd Funded Mining.\"",
      industry: "Finance",
      result: "DRC",
      stars: 4,
    },
    {
      name: "Civic Trust",
      founder: "Grace ",
      description: "\"Tracking Government Projects.\"",
      industry: "Governance",
      result: "Kenya",
      stars: 4,
    },
    {
      name: "Berrie",
      founder: "Godson ",
      description: "\"Multichain DEX.\"",
      industry: "Finance",
      result: "Africa",
      stars: 4,
    },
    {
      name: "Maids of Honour",
      founder: "Evelyne Kihia ",
      description: "\"Domestic Services.\"",
      industry: "Care",
      result: "Kenya",
      stars: 4,
    },
    {
      name: "Plate Palate",
      founder: "Jane Maina",
      description: "\"NFT Recipes on chain.\"",
      industry: "Food",
      result: "Kenya",
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
