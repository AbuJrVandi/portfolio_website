
import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Abu</span>
              <span className="text-white">Jr</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'education', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === section ? 'text-purple-400' : 'text-white hover:text-purple-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-white hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:abujuniorv@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="education">
        <Education />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="experience">
        <Experience />
      </section>
      
      <section id="contact">
        <Contact />
      </section>

      {/* Floating scroll indicator */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => scrollToSection('about')}
          className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-bounce"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </div>
  );
};

export default Index;
