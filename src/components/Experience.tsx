const Experience = () => {
  const experiences = [
    {
      position: "Training Of Trainers - Cyber Security & Digital Marketing",
      company: "Huawei Sierra Leone, Ministry of Communication & Orange Sierra Leone",
      period: "May 2024 - July 2024",
      location: "Western Area (Rural), Kono and Kenema",
      description: "Led comprehensive training programs in Cyber Security and Digital Marketing, focusing on practical, age-appropriate education for students.",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=400&h=300&fit=crop",
      achievements: [
        "Developed detailed training modules for Cyber Security and Digital Marketing",
        "Organized hands-on sessions for security tools and digital marketing software",
        "Integrated real-world case studies for enhanced learning",
        "Provided comprehensive training materials and resources"
      ]
    },
    {
      position: "Assistant ICT4D",
      company: "Catholic Relief Services (CRS)",
      period: "January 2024 - March 2024",
      location: "Freetown",
      description: "Provided technical support and managed ICT infrastructure for campaign operations, ensuring smooth implementation of digital solutions.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
      achievements: [
        "Managed help desk support for ICT4D platform",
        "Conducted capacity-building initiatives for end-users",
        "Provided real-time troubleshooting for android devices",
        "Ensured data synchronization and device management"
      ]
    },
    {
      position: "Polling Centre Manager",
      company: "Electoral Commission Sierra Leone",
      period: "June 2023",
      location: "Freetown",
      description: "Managed polling centre operations ensuring fair, transparent, and efficient electoral processes while maintaining strict security protocols.",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&h=300&fit=crop",
      achievements: [
        "Supervised polling station staff and operations",
        "Maintained electoral integrity and security",
        "Managed voter verification processes",
        "Coordinated with election officials and observers"
      ]
    },
    {
      position: "Supervisor",
      company: "Statistics Sierra Leone",
      period: "December 2021",
      location: "Freetown",
      description: "Led data collection and analysis operations, ensuring accuracy and confidentiality of census data while managing enumeration teams.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      achievements: [
        "Coordinated enumeration process and quality checks",
        "Managed sensitive data with strict protocols",
        "Applied advanced data analysis techniques",
        "Provided regular progress reports to authorities"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 hidden lg:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900 hidden lg:block z-10"></div>
                
                <div className="lg:w-1/2">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="rounded-2xl shadow-2xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-purple-400 font-semibold text-sm">{exp.period}</span>
                      <span className="text-gray-400 text-sm">{exp.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-1">{exp.position}</h3>
                    <h4 className="text-xl text-purple-300 mb-4">{exp.company}</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="text-white font-semibold mb-3">Key Responsibilities:</h5>
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
