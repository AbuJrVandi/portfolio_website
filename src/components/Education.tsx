
const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Njala University",
      year: "2014-2025",
      description: "Data Base and Programming",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqLvWrcn_lqAbpsAXVmLFzDthPQ8v7exIm30zDEGFR3v-_ybiF3Bd9s-ShctpAcIp1zk&usqp=CAU"
    },
    {
      degree: "Bachelor of Science in Mathematics and Statistics",
      institution: "Njala University",
      year: "2014-2018",
      description: "Focused on data analysis and statistical modeling",
      image: "https://www.tuumz.com/wp-content/uploads/2022/06/70815726_125960378796184_3322421644592414720_n.jpg"
    },
  ];

  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="lg:w-1/2 space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <span className="text-purple-400 font-semibold text-sm">{edu.year}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-3">{edu.degree}</h3>
                  <h4 className="text-xl text-purple-300 mb-4">{edu.institution}</h4>
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
