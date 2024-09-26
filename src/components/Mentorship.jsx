import React from 'react';
import Navbar from './Navbar';

function Mentorship() {
  return (
    <>
      <div>
        <Navbar />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Mentorship in Career Counseling</h1>
          <p className="text-xl text-gray-100 mb-6">
            Unlock your potential with personalized guidance from industry experts.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Main Content Section */}
        <div className="bg-gray-100 py-10 min-h-screen">
          <div className="container mx-auto px-6">
            
            {/* Overview */}
            <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Mentorship plays a crucial role in shaping one's career by providing valuable guidance and advice.
                Here are some key advantages of having a mentor during your career journey:
              </p>
            </div>

            {/* Mentorship Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition transform duration-300">
                  <h2 className="text-xl font-semibold text-blue-500 mb-2">{benefit.title}</h2>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Mentor Profiles Section */}
            <div className="bg-white py-10 mt-10 shadow-lg rounded-lg">
              <h3 className="text-center text-3xl font-bold text-blue-600 mb-10">Meet Our Mentors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentors.map((mentor, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src={mentor.image} alt={mentor.name} className="w-32 h-32 mx-auto rounded-full mb-4"/>
                    <h4 className="text-blue-600 font-semibold text-xl text-center">{mentor.name}</h4>
                    <p className="text-gray-600 text-center">{mentor.role}</p>
                    <p className="text-gray-500 text-center mt-2">{mentor.description}</p>
                    <button className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-full block mx-auto hover:bg-blue-500 transition duration-300">
                      Connect with {mentor.name.split(' ')[1]}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="bg-blue-50 p-8 mt-10 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Find a Mentor Today!</h3>
              <p className="text-lg text-gray-700 mb-6">
                Discover how mentorship can transform your career. Connect with experienced professionals in your field and gain invaluable advice.
              </p>
              <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 transition duration-300">
                Get Started
              </button>
            </div>

            {/* Testimonial Section */}
            <div className="bg-white py-10 mt-10 shadow-lg rounded-lg">
              <h3 className="text-center text-2xl font-bold text-gray-800 mb-6">What Our Mentees Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                    <h4 className="text-blue-600 font-semibold mt-4">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const benefits = [
  { title: "Personalized Guidance", description: "Mentors provide tailored advice based on your unique career goals and challenges." },
  { title: "Industry Knowledge", description: "Mentors offer valuable insights about industry trends, roles, and career paths." },
  { title: "Skill Development", description: "Get help developing the skills needed for your career success, both technical and soft." },
  { title: "Networking Opportunities", description: "Leverage your mentor’s network to expand your professional connections." },
  { title: "Boosted Confidence", description: "Constructive feedback and encouragement from mentors help increase your confidence." },
  { title: "Career Advancement", description: "Mentors assist in setting and achieving long-term career goals." }
];

const mentors = [
  {
    name: "Mrs. Surabhi Pranav",
    role: "Counselling Psychologist",
    description: "Government of India-certified career counsellor, mentor in psychology.",
    image: "/assets/mentors/surabhi-pranav.png"
  },
  {
    name: "Mr. Varun More",
    role: "Software Engineer",
    description: "Expert in software development and career advancement in tech.",
    image: "/assets/mentors/varun-more.png"
  },
  {
    name: "Ms. Ratna Adhya",
    role: "NCERT Expert & Sr. Counselor, Envision Overseas",
    description: "16+ years of experience teaching physics & math, providing counseling services, and training educators.",
    image: "/assets/mentors/ratna-adhya.png"
  },
  {
    name: "Mrs. Sanjivani Puranik",
    role: "School Counsellor and Educator",
    description: "Experienced counselor with a history of working in education management.",
    image: "/assets/mentors/sanjivani-puranik.png"
  },
  {
    name: "Mrs. Poornima Katyal",
    role: "NCERT Expert & Career Counselor",
    description: "Dedicated career counselor specializing in client-centered guidance for career development.",
    image: "/assets/mentors/poornima-katyal.png"
  }
];


const testimonials = [
  { name: "Pravin", role: "Software Developer", feedback: "My mentor helped me land my dream job and boosted my confidence." },
  { name: "Amar", role: "Data Scientist", feedback: "The advice I received from my mentor was life-changing. Highly recommend!" },
  { name: "Swati", role: "Product Manager", feedback: "The mentorship program provided me with the skills and network to grow in my career." },
];

export default Mentorship;