export default function Home() {
  return (
    <div className="min-h-screen bg-[#fef6e4] p-4 sm:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-12 border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="mb-2 text-5xl font-black tracking-tight sm:text-6xl">
            Peter Pak
          </h1>
          <p className="text-xl font-bold text-gray-700">
            Mechanical Engineer / Materials Scientist / Software Developer
          </p>
        </header>

        {/* About Section */}
        <section className="mb-12 border-4 border-black bg-[#a7f3d0] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="mb-4 text-3xl font-black">About</h2>
          <p className="text-lg font-medium leading-relaxed">
            I'm a passionate developer who loves building things for the web. I
            specialize in modern web technologies and creating delightful user
            experiences. When I'm not coding, you can find me exploring new
            technologies or contributing to open source.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-black">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Project 1 */}
            <div className="border-4 border-black bg-[#fbbf24] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
              <h3 className="mb-2 text-2xl font-black">Project One</h3>
              <p className="mb-4 font-medium">
                A cool project that does amazing things. Built with Next.js and
                TypeScript.
              </p>
              <div className="flex gap-2">
                <span className="border-2 border-black bg-white px-3 py-1 text-sm font-bold">
                  Next.js
                </span>
                <span className="border-2 border-black bg-white px-3 py-1 text-sm font-bold">
                  TypeScript
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border-4 border-black bg-[#c084fc] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
              <h3 className="mb-2 text-2xl font-black">Project Two</h3>
              <p className="mb-4 font-medium">
                Another awesome project solving real problems. Features
                beautiful animations.
              </p>
              <div className="flex gap-2">
                <span className="border-2 border-black bg-white px-3 py-1 text-sm font-bold">
                  React
                </span>
                <span className="border-2 border-black bg-white px-3 py-1 text-sm font-bold">
                  Tailwind
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border-4 border-black bg-[#fb923c] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
              <h3 className="mb-2 text-2xl font-black">Project Three</h3>
              <p className="mb-4 font-medium">
                An open source tool used by thousands of developers worldwide.
              </p>
              <div className="flex gap-2">
                <span className="border-2 border-black bg-white px-3 py-1 text-sm font-bold">
                  Node.js
                </span>
                <span className="border-2 border-black bg-white px-3 py-1 text-sm font-bold">
                  API
                </span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="border-4 border-black bg-[#60a5fa] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
              <h3 className="mb-2 text-2xl font-black">Project Four</h3>
              <p className="mb-4 font-medium">
                A mobile-first application with a focus on performance and
                accessibility.
              </p>
              <div className="flex gap-2">
                <span className="border-2 border-black bg-white px-3 py-1 text-sm font-bold">
                  React Native
                </span>
                <span className="border-2 border-black bg-white px-3 py-1 text-sm font-bold">
                  Firebase
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12 border-4 border-black bg-[#f472b6] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="mb-4 text-3xl font-black">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "Tailwind CSS",
              "Git",
              "PostgreSQL",
              "Docker",
            ].map((skill) => (
              <span
                key={skill}
                className="border-2 border-black bg-white px-4 py-2 text-lg font-bold"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="mb-4 text-3xl font-black">Get In Touch</h2>
          <p className="mb-6 text-lg font-medium">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:ppak10@gmail.com"
              className="border-4 border-black bg-[#fbbf24] px-6 py-3 text-lg font-black transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Email Me
            </a>
            <a
              href="https://github.com/ppak10"
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-black bg-white px-6 py-3 text-lg font-black transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ppak10"
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-black bg-[#60a5fa] px-6 py-3 text-lg font-black transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-lg font-bold">© 2025 Your Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
