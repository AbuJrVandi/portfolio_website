const About = () => {
  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              I am a versatile full-stack developer with a strong foundation in both software engineering and data science. 
              My expertise spans across modern web development, machine learning, and secure application development. 
              With experience in building everything from responsive web applications to sophisticated ML models, 
              I bring a comprehensive approach to solving complex technical challenges.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Technical Expertise</h3>
                <p className="text-gray-300 leading-relaxed">
                  My technical stack includes Python for machine learning and data analysis, React and Node.js for web development, 
                  and expertise in various frameworks and tools. I've implemented complex systems ranging from machine learning 
                  models for classification tasks to secure banking applications and responsive management systems.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Core Strengths</h3>
                <ul className="text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                  <li>Full-stack web development with React, Node.js, and modern frameworks</li>
                  <li>Machine learning and data analysis using Python, scikit-learn, and pandas</li>
                  <li>Secure application development with focus on best practices</li>
                  <li>Database design and management</li>
                  <li>API development and integration</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Development Philosophy</h3>
                <p className="text-gray-300 leading-relaxed">
                  I believe in writing clean, maintainable code that solves real-world problems. My approach combines 
                  technical expertise with creative problem-solving, always focusing on delivering scalable solutions 
                  that provide exceptional user experiences while maintaining high performance and security standards.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">5+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">3+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">15+</h3>
              <p className="text-gray-300">Technologies</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">3</h3>
              <p className="text-gray-300">Domains Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
