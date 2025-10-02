import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: 'idea',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [humanCheck, setHumanCheck] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (humanCheck !== '5') {
      setError('Please confirm you are human by entering the correct number.');
      return;
    }
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      stage: 'idea',
      message: '',
    });
    setError('');
    setHumanCheck('');
    
    // Reset the submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="animate-slide-up">Get Started Today</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-slide-up">
              Ready to take your startup to the next level? Fill out the form below and our team will get in touch with you.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 animate-slide-up">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your application has been submitted. Our team will contact you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-magenta focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-magenta focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company/Startup Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-magenta focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Stage *
                    </label>
                    <select
                      id="stage"
                      name="stage"
                      required
                      value={formData.stage}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-magenta focus:border-transparent"
                    >
                      <option value="idea">Idea Stage</option>
                      <option value="prototype">Prototype/MVP</option>
                      <option value="early">Early Traction</option>
                      <option value="growth">Growth Stage</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your startup *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-magenta focus:border-transparent"
                    placeholder="Brief description of your startup and what you hope to achieve"
                  />
                </div>
                
                <div>
                  <label htmlFor="humanCheck" className="block text-sm font-medium text-gray-700 mb-1">
                    Human Check: What is 2 + 3? *
                  </label>
                  <input
                    id="humanCheck"
                    name="humanCheck"
                    type="text"
                    required
                    value={humanCheck}
                    onChange={(e) => setHumanCheck(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-magenta focus:border-transparent"
                    placeholder="Enter the answer"
                  />
                </div>
                
                {error && <p className="text-red-500">{error}</p>}
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn-primary flex items-center"
                  >
                    Submit Application
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
