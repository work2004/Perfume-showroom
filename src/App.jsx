import React, { useState } from "react";
import { motion } from "framer-motion";

// IBM-Interview-Resume.jsx
// Single-file React component (TailwindCSS + framer-motion)
// Responsive across devices and includes a profile-image upload/preview option.

export default function App() {
  const [profileSrc, setProfileSrc] = useState(null);

  const handleProfileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setProfileSrc(reader.result);
    reader.readAsDataURL(file);
  };

  const container = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 p-4 md:p-8 flex items-center justify-center">
      <motion.div
        className="w-full max-w-4xl bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between p-5 md:p-6 border-b border-white/6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shrink-0 overflow-hidden">
                {profileSrc ? (
                  <img
                    src={profileSrc}
                    // src="ww.jpg"
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xl md:text-2xl font-bold">RS</span>
                )}
              </div>

              {/* profile upload visible on small screens as icon */}
              <label
                className="absolute -right-2 -bottom-2 bg-white/10 text-xs rounded-full px-2 py-1 cursor-pointer text-slate-100"
                title="Upload profile"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfileUpload}
                  className="hidden"
                />
                Edit
              </label>
            </div>

            <div>
              <h1 className="text-lg md:text-2xl font-extrabold">
                Radha Singh Rana
              </h1>
              <p className="text-xs md:text-sm text-slate-300">
                Data Science Engineer • Python + SQL • Resume
              </p>
            </div>
          </div>

          <div className="mt-3 md:mt-0 flex gap-2 items-center">
            <a
              className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium shadow hover:scale-105 transform transition"
              href="#contact"
            >
              Contact
            </a>
            <a
              className="text-xs px-3 py-2 rounded-md border border-white/10 text-slate-200/90 hover:bg-white/3"
              href="#about"
            >
              About
            </a>
          </div>
        </div>

        {/* Main content: responsive grid - on small screens it stacks, on md it becomes 3 columns */}
        <div className="md:grid md:grid-cols-3 gap-6 p-5 md:p-6">
          {/* Left column */}
          <div className="col-span-1 space-y-4 md:space-y-6">
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="rounded-xl p-4 bg-white/4 border border-white/6"
            >
              <h3 className="text-sm md:text-lg font-semibold">
                Quick Profile
              </h3>
              <p className="mt-2 text-xs md:text-sm text-slate-200">
                Frontend-focused engineer building responsive, accessible, and
                cloud-aware UIs. Aligned with IBM's hybrid-cloud and
                enterprise-first mindset.
              </p>

              <div className="mt-3 grid grid-cols-2 gap-2 text-xs md:text-sm text-slate-300">
                <div>
                  <div className="font-medium text-slate-200">Location</div>
                  <div>Noida, South Delhi, India</div>
                </div>
                <div>
                  <div className="font-medium text-slate-200">Open to</div>
                  <div>Frontend / Fullstack</div>
                </div>
                <div>
                  <div className="font-medium text-slate-200">Email</div>
                  <div>radha.singh@XYZ.com</div>
                </div>
                <div>
                  <div className="font-medium text-slate-200">LinkedIn</div>
                  <div>/in/radhasingh</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="rounded-xl p-4 bg-white/4 border border-white/6"
            >
              <h3 className="text-sm md:text-lg font-semibold">Skills</h3>
              <div className="mt-3 space-y-3">
                {[
                  { name: "C++", lvl: 96 },
                  { name: "Java", lvl: 97 },
                  { name: "Shader Language ", lvl: 99 },
                  { name: "TypeScript", lvl: 82 },
                  { name: "Python", lvl: 95 },
                  { name: "SQL", lvl: 95 },
                  { name: "C#", lvl: 80 },
                  { name: "Tailwind CSS", lvl: 88 },
                  { name: "Cloud (IBM/AWS)", lvl: 80 },
                ].map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs md:text-sm text-slate-300">
                      <span>{s.name}</span>
                      <span>{s.lvl}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/6 rounded-full mt-1">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400"
                        style={{ width: `${s.lvl}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="rounded-xl p-4 bg-white/4 border border-white/6"
            >
              <h3 className="text-sm md:text-lg font-semibold">Education</h3>
              <div className="mt-2 text-xs md:text-sm text-slate-200">
                <div className="font-medium">
                  BCA(Computer Science) — Guru Gobind Singh Indraprastha
                  University (GGSIPU)
                </div>
                <div className="text-xs text-slate-300">2021 — 2023</div>
                <div>Percentage Marks - 95.4%</div>
              </div>
              <div className="mt-2 text-xs md:text-sm text-slate-200">
                <div className="font-medium">
                  12th — Hindu Collage New Delhi (HCND)
                </div>
                <div className="text-xs text-slate-300">2019 — 2021</div>
                <div>Percentage Marks - 95%</div>
              </div>
            </motion.div>
          </div>

          {/* Right column - spans two columns on md */}
          <motion.div
            className="col-span-2 space-y-4 md:space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.section
              variants={item}
              className="rounded-xl p-4 bg-white/4 border border-white/6"
            >
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-lg md:text-2xl font-bold">About Me</h2>
                  <p className="mt-2 text-xs md:text-sm text-slate-200 leading-relaxed">
                    Hello — I'm Radha. I create responsive, accessible, and
                    maintainable web applications using React and modern
                    tooling. I focus on measurable outcomes — performance,
                    developer experience, and cross-team collaboration — which
                    align well with IBM's enterprise focus.
                  </p>

                  <div className="mt-3 flex gap-2 flex-wrap">
                    <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-white/6">
                      UI Architecture
                    </span>
                    <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-white/6">
                      Component Libraries
                    </span>
                    <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-white/6">
                      Performance
                    </span>
                    <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-white/6">
                      Testing
                    </span>
                  </div>
                </div>

                {/* desktop preview card for IBM */}
                <motion.div
                  className="w-28 h-28 md:w-36 md:h-36 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center shadow-xl"
                  initial={{ rotate: -6 }}
                  animate={{ rotate: 0 }}
                  transition={{ type: "spring", damping: 10 }}
                >
                  <div className="text-center">
                    <div className="text-xs md:text-sm text-white/90">
                      Interview
                    </div>
                    <div className="text-lg md:text-2xl font-bold">IBM</div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            <motion.section
              variants={item}
              className="rounded-xl p-4 bg-white/4 border border-white/6"
            >
              <h3 className="text-sm md:text-xl font-bold">Experience</h3>

              <div className="mt-3 space-y-3 text-xs md:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 mt-1">
                    <div className="w-9 h-9 rounded-md bg-indigo-600 flex items-center justify-center font-bold">
                      I
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">
                          Frontend Engineer — IBM (Contract)
                        </div>
                        <div className="text-xs text-slate-300">
                          Jan 2024 — Present
                        </div>
                      </div>
                      <div className="text-xs text-slate-400">Hybrid</div>
                    </div>

                    <ul className="mt-2 list-disc ml-5 space-y-1">
                      <li>
                        Built a reusable component library that improved
                        delivery time by 25%.
                      </li>
                      <li>
                        Optimized dashboards to reduce Time-To-Interactive by
                        40%.
                      </li>
                      <li>
                        Integrated frontend with cloud services and secured auth
                        flows.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 mt-1">
                    <div className="w-9 h-9 rounded-md bg-slate-600 flex items-center justify-center font-bold">
                      C
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">
                          Frontend Developer — Creative Apps
                        </div>
                        <div className="text-xs text-slate-300">
                          Jul 2022 — Dec 2023
                        </div>
                      </div>
                      <div className="text-xs text-slate-400">R</div>
                    </div>

                    <p className="mt-2 text-sm text-slate-200">
                      Built scalable SPAs and collaborated with backend teams to
                      deliver performant user experiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 mt-1">
                    <div className="w-9 h-9 rounded-md bg-fuchsia-50 flex items-center justify-center text-black font-bold">
                      D
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">
                          Data Science — Data Management Service Side
                        </div>
                        <div className="text-xs text-slate-300">
                          Jul 2022 — Dec 2023
                        </div>
                      </div>
                      <div className="text-xs text-slate-400">R</div>
                    </div>

                    <p className="mt-2 text-sm text-slate-200">
                      Built scalable SPAs and collaborated with Server Data
                      teams to deliver performant user experiences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              variants={item}
              className="rounded-xl p-4 bg-white/4 border border-white/6"
            >
              <h3 className="text-sm md:text-xl font-bold">
                Projects & Interview Talking Points
              </h3>
              <div className="mt-2 space-y-2 text-xs md:text-sm text-slate-200">
                <div>
                  <div className="font-medium">Reusable Component Library</div>
                  <div className="text-xs md:text-sm text-slate-300">
                    Design decisions, Storybook, and cross-team impact.
                  </div>
                </div>

                <div>
                  <div className="font-medium">Performance Optimization</div>
                  <div className="text-xs md:text-sm text-slate-300">
                    Explain the approach (code-splitting, lazy hydration) and
                    measured results.
                  </div>
                </div>

                <div>
                  <div className="font-medium">Cloud Integration</div>
                  <div className="text-xs md:text-sm text-slate-300">
                    Auth flows, observability, and trade-offs when integrating
                    with IBM Cloud.
                  </div>
                </div>

                <div>
                  <div className="font-medium">Teamwork</div>
                  <div className="text-xs md:text-sm text-slate-300">
                    STAR examples where you resolved cross-team challenges.
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Contact / CTA */}
            <motion.section
              id="contact"
              variants={item}
              className="rounded-xl p-4 bg-gradient-to-r from-slate-800/20 to-slate-900/10 border border-white/6"
            >
              <div className="md:flex md:items-center md:justify-between">
                <div>
                  <h3 className="text-sm md:text-lg font-bold">
                    Let's connect
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 mt-1">
                    Available for interviews. Happy to walk through any project
                    or architecture in detail.
                  </p>
                </div>

                <div className="mt-3 md:mt-0 flex gap-2">
                  <a
                    className="px-3 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:scale-105 transform transition"
                    href="mailto:radha.singh@example.com"
                  >
                    Email
                  </a>

                  <a
                    className="px-3 py-2 rounded-lg border border-white/10 text-slate-200 hover:bg-white/6"
                    href="#"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>

        {/* Footer small note for mobile - quick upload */}
        <div className="p-4 border-t border-white/6 text-center text-xs text-slate-300 md:hidden">
          Tip: Tap the profile avatar's "Edit" to upload a photo for your resume
          preview.
        </div>

        {/* Certifications Section */}
        <motion.section
          variants={item}
          className="rounded-xl p-4 bg-white/4 border border-white/6"
        >
          <h3 className="text-sm md:text-xl font-bold">Certifications</h3>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "IBM Data Science Professional Certificate",
                org: "Coursera / IBM",
                year: "2023",
              },
              {
                title: "AWS Cloud Practitioner Essentials",
                org: "Amazon Web Services",
                year: "2024",
              },
              {
                title: "React Advanced Patterns Workshop",
                org: "Frontend Masters",
                year: "2024",
              },
              {
                title: "SQL for Data Analysis",
                org: "Kaggle",
                year: "2023",
              },
            ].map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-3 rounded-lg bg-gradient-to-r from-slate-800/40 to-slate-900/40 border border-white/10 shadow-sm"
              >
                <h4 className="font-semibold text-sm md:text-base">
                  {c.title}
                </h4>
                <p className="text-xs text-slate-300">{c.org}</p>
                <p className="text-xs text-slate-400">{c.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Timeline */}
        <motion.section
          variants={item}
          className="rounded-xl p-4 bg-white/4 border border-white/6"
        >
          <h3 className="text-sm md:text-xl font-bold">Highlighted Projects</h3>
          <div className="mt-4 relative border-l border-slate-600 pl-6 space-y-6">
            {[
              {
                title: "AI Chatbot for Customer Support",
                desc: "Built a chatbot integrated with IBM Watson Assistant. Reduced support load by 45%.",
                year: "2024",
              },
              {
                title: "Realtime Dashboard Optimization",
                desc: "Optimized TTI by 40% using code-splitting and React Suspense.",
                year: "2023",
              },
              {
                title: "Reusable Component Library",
                desc: "Created internal design system with Storybook. Improved delivery speed by 25%.",
                year: "2022",
              },
            ].map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-indigo-500 shadow"></div>
                <div>
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-xs md:text-sm text-slate-300">{p.desc}</p>
                  <p className="text-xs text-slate-400">{p.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          variants={item}
          className="rounded-xl p-4 bg-white/4 border border-white/6"
        >
          <h3 className="text-sm md:text-xl font-bold">Achievements</h3>
          <ul className="mt-3 list-disc ml-5 space-y-2 text-xs md:text-sm text-slate-200">
            <li>
              Awarded <span className="font-semibold">Best Intern 2023</span> at
              Creative Apps for outstanding frontend performance.
            </li>
            <li>
              Placed in <span className="font-semibold">Top 5%</span> of IBM
              Code Challenge Hackathon (2024).
            </li>
            <li>
              Published article on{" "}
              <span className="font-semibold">
                Optimizing React Performance
              </span>{" "}
              (2k+ reads on Medium).
            </li>
          </ul>
        </motion.section>

        {/* Languages & Interests Section */}
        <motion.section
          variants={item}
          className="rounded-xl p-4 bg-white/4 border border-white/6"
        >
          <h3 className="text-sm md:text-xl font-bold">
            Languages & Interests
          </h3>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-200">
            <div>
              <div className="font-medium">Languages</div>
              <ul className="mt-1 space-y-1">
                <li>Hindi — Fluent (100%)</li>
                <li>English — Fluent (100%)</li>
                <li>UK English - Fluent (95%)</li>
              </ul>
            </div>

            <div>
              <div className="font-medium">Interests</div>
              <ul className="mt-1 space-y-1">
                <li>Chess ♟️</li>
                <li>Artificial Intelligence 🤖</li>
                <li>Online Video Game ( PUBG & Call Of Duty)</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Certifications Section */}

        {/* Testimonials Section */}
        <motion.section
          variants={item}
          className="rounded-xl p-4 bg-white/4 border border-white/6"
        >
          <h3 className="text-sm md:text-xl font-bold">Testimonials</h3>
          <motion.div
            className="mt-3 space-y-3"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                quote:
                  "Radha quickly adapts to new challenges and always delivers high-quality work. A true team player!",
                author: "Manager — IBM",
              },
              {
                quote:
                  "Her frontend skills and problem-solving mindset stood out during the hackathon. Highly recommended.",
                author: "Mentor — Creative Apps",
              },
              {
                quote:
                  "Radha has a sharp eye for detail and a deep understanding of modern UI frameworks.",
                author: "Professor — GGSIPU",
              },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                className="p-3 rounded-lg bg-gradient-to-r from-indigo-600/20 to-blue-500/10 border border-white/10 shadow"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xs md:text-sm text-slate-200 italic">
                  “{t.quote}”
                </p>
                <div className="mt-1 text-right text-[10px] md:text-xs text-slate-400">
                  — {t.author}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 🌟 Hackathons & Competitions */}
        <motion.section
          className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            Hackathons & Competitions
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>
              <span className="font-semibold text-white">
                Smart India Hackathon 2024:
              </span>
              Top 20 finalist nationally, developed AI-powered railway
              management system.
            </li>
            <li>
              <span className="font-semibold text-white">
                IBM Code Challenge 2023:
              </span>
              Secured 1st place in ReactJS + Cloud app development contest.
            </li>
          </ul>
        </motion.section>

        {/* 🏆 Awards & Honors */}
        <motion.section
          className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Awards & Honors
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <span className="font-semibold">Dean’s Merit List (Top 1%)</span>{" "}
              – 2022
            </li>
            <li>
              <span className="font-semibold">Best Project Award</span> – IBM
              Internship 2023
            </li>
            <li>
              <span className="font-semibold">Women in Tech Scholarship</span> –
              2024
            </li>
          </ul>
        </motion.section>

        {/* ✨ Inspiring End Note */}
        <motion.section
          className="bg-gradient-to-r from-purple-800 via-blue-800 to-purple-900 text-white p-10 rounded-2xl shadow-lg mt-10 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-extrabold mb-4 text-yellow-300">
            “Passionate. Determined. Ready to Create Impact with IBM.”
          </h2>

          <p className="italic text-lg text-gray-200 mb-6">
            Thank you for reviewing my resume. I look forward to contributing my
            skills and growing with IBM’s vision of innovation.
          </p>

          <p className="font-semibold text-gray-300">– Radha Singh</p>
        </motion.section>
      </motion.div>
    </div>
  );
}
