import React, { useState } from 'react';
import { FOUNDER_STORY } from '../data/semiconData';
import { GraduationCap, Award, BookOpen, Users, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { QuadLogo } from './QuadLogo';

export const TalentEcosystem: React.FC = () => {
  const [fellowshipSubmitted, setFellowshipSubmitted] = useState(false);
  const [studentForm, setStudentForm] = useState({
    name: '',
    email: '',
    college: '',
    degree: 'B.Tech ECE',
    yearOfStudy: '3rd Year',
    interests: 'RTL Design & Verification',
  });

  const handleFellowshipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentForm.name || !studentForm.email) return;
    setFellowshipSubmitted(true);
  };

  return (
    <section id="talent-ecosystem" className="py-20 bg-white dark:bg-[#070c09] border-b border-slate-200 dark:border-emerald-950/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-700 dark:text-sky-400 mb-3 font-semibold">
            <GraduationCap className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>Type 3: Talent Development · Category 10</span>
            <span aria-hidden="true">·</span>
            <span>Semicon 2.0 Academic Synergies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 text-balance">
            The Campus-to-Wafer Talent Initiative
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Founded by a B.Tech Electronics & Communication Engineering (ECE) student, Quad Techtronix is dedicated to solving India’s semiconductor talent gap by connecting engineering classrooms directly to live MPW tapeout shuttles and national nanofab facilities.
          </p>
        </div>

        {/* Founder's Story & Strategic Vision Card */}
        <div className="mb-14 p-8 rounded-2xl bg-gradient-to-r from-emerald-50 to-slate-50 dark:from-[#0d1c14] dark:to-[#08120d] border border-emerald-200 dark:border-emerald-800/50 shadow-md dark:shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-10 pointer-events-none">
            <QuadLogo size="xl" glow={false} />
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-400 dark:border-emerald-600/50 flex items-center justify-center font-bold text-lg text-emerald-900 dark:text-[#e5c158] font-mono">
                ECE
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {FOUNDER_STORY.name}
                </h3>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                  {FOUNDER_STORY.role} · {FOUNDER_STORY.background}
                </span>
              </div>
            </div>

            <blockquote className="text-slate-700 dark:text-slate-200 text-sm sm:text-base italic leading-relaxed pl-4 border-l-2 border-[#caa23d] dark:border-[#e5c158]">
              "{FOUNDER_STORY.quote}"
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {FOUNDER_STORY.corePillars.map((pillar, idx) => (
                <div key={idx} className="p-3 bg-white dark:bg-[#060e0a]/80 rounded-lg border border-emerald-100 dark:border-emerald-950/80 shadow-xs">
                  <span className="text-xs font-bold text-slate-900 dark:text-[#e5c158] block mb-1">
                    {pillar.title}
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2-Column Split: Academic Alliance Programs + Student Fellowship Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Programs Aligned with Category 10 */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Category 10 Nodal Academic Programs
            </h3>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#09130e] border border-slate-200 dark:border-emerald-950 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">PROGRAM 01</span>
                  <span className="text-slate-500 dark:text-slate-400">Free Open-Source VLSI Track</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Open PDK & RTL-to-GDSII Hands-on Workshops
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Students learn industry-grade Verilog/SystemVerilog, synthesis using Yosys/OpenLane, and design physical tapeout layouts using the SkyWater 130nm PDK.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#09130e] border border-slate-200 dark:border-emerald-950 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#b48c26] dark:text-[#e5c158] font-semibold">PROGRAM 02</span>
                  <span className="text-slate-500 dark:text-slate-400">Undergraduate MPW Shuttles</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  University Multi-Project Wafer Co-Sponsorship
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Top engineering capstone projects are selected to share silicon wafer space on Quad Techtronix's MPW tapeout runs, giving undergraduate engineers their own fabricated ASIC dies.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#09130e] border border-slate-200 dark:border-emerald-950 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-sky-700 dark:text-sky-400 font-semibold">PROGRAM 03</span>
                  <span className="text-slate-500 dark:text-slate-400">Nanofab Lab Apprenticeships</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Cleanroom & Shop-Floor Technician Upskilling
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Hands-on training aligned with the Semicon 2.0 manufacturing track for shop-floor technicians covering photolithography, wet chemical etching, and wire bonding at partner laboratories.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Student Fellowship Application Form */}
          <div className="lg:col-span-5 bg-white dark:bg-[#09120e] border border-slate-200 dark:border-emerald-900/60 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="border-b border-slate-200 dark:border-emerald-950 pb-4 mb-5">
              <span className="text-xs font-mono uppercase text-[#b48c26] dark:text-[#e5c158] font-bold tracking-wider block mb-1">
                University Alliance
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Apply for Student Silicon Fellowship
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Open to Indian undergraduate and postgraduate engineering students (ECE / EEE / VLSI).
              </p>
            </div>

            {fellowshipSubmitted ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500 rounded-xl text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Application Received!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Thank you, <strong className="text-emerald-700 dark:text-emerald-300">{studentForm.name}</strong>. Our engineering team at Quad Techtronix will review your academic profile for the upcoming MPW tapeout cohort and send EDA grid access credentials.
                </p>
                <button
                  onClick={() => setFellowshipSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-900 bg-[#e5c158] rounded-md hover:bg-[#f6d26b]"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleFellowshipSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={studentForm.name}
                    onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                    className="w-full py-2 px-3 bg-slate-50 dark:bg-[#060b08] border border-slate-300 dark:border-emerald-950 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Institutional Email (.edu / .ac.in preferred)</label>
                  <input
                    type="email"
                    required
                    placeholder="student@college.edu.in"
                    value={studentForm.email}
                    onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                    className="w-full py-2 px-3 bg-slate-50 dark:bg-[#060b08] border border-slate-300 dark:border-emerald-950 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Degree Program</label>
                    <select
                      value={studentForm.degree}
                      onChange={(e) => setStudentForm({ ...studentForm, degree: e.target.value })}
                      className="w-full py-2 px-2 bg-slate-50 dark:bg-[#060b08] border border-slate-300 dark:border-emerald-950 rounded-lg text-xs text-slate-900 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="B.Tech ECE">B.Tech ECE</option>
                      <option value="B.Tech EEE">B.Tech EEE</option>
                      <option value="M.Tech VLSI">M.Tech VLSI</option>
                      <option value="PhD Semiconductor">PhD Semiconductor</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Year of Study</label>
                    <select
                      value={studentForm.yearOfStudy}
                      onChange={(e) => setStudentForm({ ...studentForm, yearOfStudy: e.target.value })}
                      className="w-full py-2 px-2 bg-slate-50 dark:bg-[#060b08] border border-slate-300 dark:border-emerald-950 rounded-lg text-xs text-slate-900 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="1st / 2nd Year">1st / 2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="Final Year">Final Year</option>
                      <option value="Postgraduate">Postgraduate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">College / University Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. National Institute of Technology"
                    value={studentForm.college}
                    onChange={(e) => setStudentForm({ ...studentForm, college: e.target.value })}
                    className="w-full py-2 px-3 bg-slate-50 dark:bg-[#060b08] border border-slate-300 dark:border-emerald-950 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Primary Area of Interest</label>
                  <select
                    value={studentForm.interests}
                    onChange={(e) => setStudentForm({ ...studentForm, interests: e.target.value })}
                    className="w-full py-2 px-2 bg-slate-50 dark:bg-[#060b08] border border-slate-300 dark:border-emerald-950 rounded-lg text-xs text-slate-900 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="RTL Design & Verification">RTL Design & Verification (SystemVerilog / UVM)</option>
                    <option value="RISC-V Architecture">RISC-V Custom Instructions & ISA Design</option>
                    <option value="Physical Design & P&R">Physical Design, Timing Closure & DRC</option>
                    <option value="Analog & Power PMIC">Analog / Mixed-Signal & GaN Power ICs</option>
                    <option value="Silicon Photonics">Silicon Photonics & Advanced Packaging</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-[#e5c158] hover:bg-[#f6d26b] transition-all rounded-lg cursor-pointer"
                >
                  Submit Fellowship Application
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
