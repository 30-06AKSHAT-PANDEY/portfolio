export default function Portfolio() {
  const projects = [
    {
      title: "URL Shortener Frontend",
      description:
        "Built a responsive React-based URL shortener application with clean UI, analytics view, and reusable components.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "HTTP URL Shortener Microservice",
      description:
        "Developed backend APIs for URL shortening, redirection, and statistics tracking with scalable architecture.",
      tech: ["FastAPI", "Python", "REST APIs"],
    },
    {
      title: "Selenium Web Automation",
      description:
        "Automated browser actions such as login, navigation, and form submissions using Selenium and Python.",
      tech: ["Python", "Selenium", "Pandas"],
    },
  ];

  const skills = [
    "C",
    "C++",
    "Java",
    "Python",
    "SQL",
    "React",
    "FastAPI",
    "MongoDB",
    "Tailwind CSS",
    "DSA",
    "Power BI",
    "Selenium",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Akshat Pandey
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
          B.Tech Student | Aspiring Software Developer | DSA & Web Development Enthusiast
        </p>

        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl border border-white hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <div className="bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-800">
          <p className="text-gray-300 leading-8 text-lg">
            I am a B.Tech student from Galgotias College of Engineering and Technology with interests in software development, data structures & algorithms, backend systems, and frontend design. I enjoy building practical applications, solving coding problems, and learning modern technologies.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-center hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-6 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

              <p className="text-gray-400 mb-6 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-black border border-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Education</h2>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold">
              Galgotias College of Engineering and Technology
            </h3>
            <p className="text-gray-400 mt-2">
              B.Tech • Computer Science & Engineering
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-500">10th Percentage</p>
                <p className="text-xl font-semibold">85%</p>
              </div>

              <div>
                <p className="text-gray-500">12th Percentage</p>
                <p className="text-xl font-semibold">88.04%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <p className="text-gray-400 text-lg mb-10">
          Interested in collaborating or hiring? Let’s connect.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:yourmail@example.com"
            className="px-6 py-4 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="px-6 py-4 border border-white rounded-2xl hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="px-6 py-4 border border-white rounded-2xl hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        © 2026 Akshat Pandey. All rights reserved.
      </footer>
    </div>
  );
}
