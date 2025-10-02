const ContactForm = () => {
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-center mb-12">
            <h2 className="animate-slide-up">Get Started Today</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-slide-up">
              Ready to take your startup to the next level? Contact us today.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-up">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p className="text-xl text-kenya-magenta font-semibold">
                fabian@creative-operations.group
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;