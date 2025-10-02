
import { DollarSign, Users, Laptop, Building, PiggyBank, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const StartupCosts = () => {
  const costItems = [
      {
      title: "12 Months",
      description: "web3/web2 , Automation , AI , Blockchain KES 30,000 monthly.",
      icon: <Calendar size={48} className="text-kenya-magenta" />,
    },
    
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
