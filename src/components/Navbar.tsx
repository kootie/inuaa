import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <img src="/inuaa.jpg" alt="Inuaa Logo" className="h-10" />
          </a>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-kenya-magenta transition-colors">Home</a>
          <a href="#programs" className="text-gray-800 hover:text-kenya-magenta transition-colors">Programs</a>
          <a href="#stories" className="text-gray-800 hover:text-kenya-magenta transition-colors">Success Stories</a>
          <a href="#contact" className="text-gray-800 hover:text-kenya-magenta transition-colors">Contact</a>
        </div>
        
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-kenya-magenta"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto py-4 space-y-3">
            <a 
              href="#home" 
              className="block text-gray-800 hover:text-kenya-magenta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#programs" 
              className="block text-gray-800 hover:text-kenya-magenta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </a>
            <a 
              href="#stories" 
              className="block text-gray-800 hover:text-kenya-magenta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </a>
            
            <a 
              href="#contact" 
              className="block text-gray-800 hover:text-kenya-magenta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
