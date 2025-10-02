
import { DollarSign, Users, Laptop, Building, PiggyBank } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const StartupCosts = () => {
  const costItems = [
    {
      title: "Mentors",
      description: "The Human Version of, Have you tried turning it off and on again?",
      amount: "KES 6,500",
      icon: <Building size={40} className="text-kenya-magenta" />,
      details: [
        "Business registration: KES 10,000",
        "Legal fees: KES 5,000 ",
        "Permits and licenses: KES 5,000 - 35,000"
      ]
    },
    {
      title: "Certificate Registration",
      description: "Even your genius needs official paperwork to be taken seriously",
      amount: "KES 4,500",
      icon: <Laptop size={40} className="text-kenya-magenta" />,
      details: [
        "Business Certificate",
        "Ltd Company: KES 32,000"
      ]
    },
    {
      title: "Legal and Copyright",
      description: "Because stealing ideas is only cool in group projects",
      amount: "KES 5,500/month",
      icon: <Users size={40} className="text-kenya-magenta" />,
      details: [
        "Copyright",
        "Contracts",
        "Documents"
      ]
    },
    {
      title: "County license",
      description: "Your business dreams need a permission slip from the grown-ups at City Hall",
      amount: "KES 10,000 - 30,000",
      icon: <DollarSign size={40} className="text-kenya-magenta" />,
      details: [
        "County License",
        "Permits"
      ]
    },
    {
      title: "Domain and Logo",
      description: "Nothing says “legit” like owning a slice of the internet and slapping your name on it with style.",
      amount: "KES 5,500",
      icon: <DollarSign size={40} className="text-kenya-magenta" />,
      details: [
        "Domaine name and type",
        "Logo selection",
        "Logo Design"
      ]
    },
    {
      title: "Social Media",
      description: "Shouting into the void is way more effective when the void likes, shares, and follows you back.",
      amount: "KES 7,500",
      icon: <DollarSign size={40} className="text-kenya-magenta" />,
      details: [
        "Domain Name",
        "Type",
        "Social Content"
      ]
    },
    {
      title: "MVP and Hosting",
      description: "Nothing says “we’re serious” like launching a half-built product on a fully working server.",
      amount: "KES 15,000",
      icon: <DollarSign size={40} className="text-kenya-magenta" />,
      details: [
        "Basic MVP",
        "Vercel Hosting",
        "Email Configuration"
      ]
    },
    {
      title: "Project Management and Tools",
      description: "Sticky notes and caffeine can only take you so far before chaos gets promoted to team lead.",
      amount: "KES 5,000",
      icon: <DollarSign size={40} className="text-kenya-magenta" />,
      details: [
        "Trello",
        "Task Breakdown",
        "Agile Porcesses"
      ]
    },
    {
      title: "The Intern Builder Programme",
      description: "Every empire needs a few brave souls to learn, build, and occasionally fetch the Wi-Fi password.",
      amount: "KES 400",
      icon: <DollarSign size={40} className="text-kenya-magenta" />,
      details: [
        "Weekly payments",
        "Launch in 3 Months",
        "Certificate of Completion"
      ]
    },
    {
      title: "People and Culture",
      description: "Building a great company starts with making sure your team doesn’t just work together—they actually like each other.",
      amount: "KES 5,000",
      icon: <DollarSign size={40} className="text-kenya-magenta" />,
      details: [
        "Building Teams",
        "Culture",
        "Documents and Contracts"
      ]
    },
    {
      title: "Finance and Accounting",
      description: "just winging it only works for your weekend plans, not your balance sheet.",
      amount: "KES 5,000",
      icon: <DollarSign size={40} className="text-kenya-magenta" />,
      details: [
        "Digital marketing: KES 50,000 - 150,000",
        "Events and networking: KES 30,000 - 100,000",
        "Content creation: KES 20,000 - 50,000"
      ]
    },
    {
      title: "Pitch Presentations",
      description: "Nothing says I’m the next big thing like convincing investors while sipping overpriced coffee in a room you can barely pronounce.",
      amount: "KES 3,000",
      icon: <PiggyBank size={40} className="text-kenya-magenta" />,
      details: [
        "1 minute pitch deck",
        "5 minute pitch deck",
        "10 page deck"
      ]
    }
  ];

  return (
    <section id="costs" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="animate-slide-up">Startup Costs in Kenya</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-slide-up">
            Understanding the financial requirements for building a successful startup in Kenya is crucial for proper planning and fundraising. Here's a breakdown of typical costs you'll face.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {costItems.map((cost, index) => (
            <Card 
              key={cost.title} 
              className="hover:shadow-lg transition-shadow duration-300 hover:border-kenya-purple border-2 border-transparent animate-slide-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardHeader className="flex flex-col items-center">
                <div className="mb-3">{cost.icon}</div>
                <CardTitle className="text-xl text-kenya-magenta-title">{cost.title}</CardTitle>
                <CardDescription className="text-center">{cost.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-center mb-4 text-kenya-purple">{cost.amount}</p>
                <ul className="space-y-2">
                  {cost.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start">
                      <span className="text-kenya-magenta mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our programs help you optimize your startup costs and connect you with potential investors and funding opportunities.
          </p>
          <a href="#contact" className="btn-primary">
            Get Cost Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default StartupCosts;
