import { Calendar, GraduationCap, Briefcase, Rocket } from 'lucide-react';

const ProgramAreas = () => {
  const programs = [
    {
      title: "12 Months",
      description: "web3/web2 , Automation , AI , Blockchain KES 30,000 monthly.",
      icon: <Calendar size={48} className="text-kenya-magenta" />,
    },
    {
      title: "6 Months",
      description: "Blokchain, Web2 KES 60,000 monthly.",
      icon: <GraduationCap size={48} className="text-kenya-magenta" />,
    },
    {
      title: "3 Months",
      description: "Interns Track, 3 Months at KES 3,000 a month.",
      icon: <Briefcase size={48} className="text-kenya-magenta" />,
    },
    {
      title: "1 Month",
      description: "Startup PAP, build an MVP in 30 days, tract for non-developers 30% revenue share.",
      icon: <Rocket size={48} className="text-kenya-magenta" />,
    },
  ];

  return (
    <section id="programs" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="animate-slide-up">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-slide-up">
            Comprehensive support tailored to meet the unique needs of Kenyan entrepreneurs at every stage of their journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.title} 
              className="card hover:border-kenya-purple border-2 border-transparent animate-slide-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex justify-center mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{program.title}</h3>
              <p className="text-gray-600 text-center">{program.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            Apply to Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramAreas;
