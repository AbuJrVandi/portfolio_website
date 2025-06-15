import { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Developer', 'Designer', 'Problem Solver', 'Data Scientist', 'Tech Enthusiast', 'Creative Thinker'];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/abu-junior-vandi-cv.pdf';
    link.download = 'Abu-Junior-Vandi-CV.pdf'; // Name that will appear when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://abujuniorvandi.pages.dev/WhatsApp%20Image%201446-12-02%20at%2019.49.20.jpeg"
            alt="Profile"
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mx-auto mb-8 border-4 border-purple-400 shadow-2xl animate-float object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Abu Junior Vandi</span>
        </h1>
        
        <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center">
          <span>I'm a </span>
          <span className="text-purple-400 ml-2 font-semibold border-r-2 border-purple-400 pr-1">
            {text}
          </span>
        </div>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Passionate about creating exceptional digital experiences through innovative design and cutting-edge technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
          >
            <span>View My Work</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          <button 
            onClick={handleDownloadCV}
            className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToProjects}>
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;
