import React, { useState } from 'react';
import { Mail, Building2, MapPin, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    partnershipTrack: 'Category 02: Fabless Commercial Co-Investment',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-[#050806] border-b border-slate-200 dark:border-emerald-950/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-3 font-semibold">
            <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Semicon 2.0 Inbound Portal</span>
            <span aria-hidden="true">·</span>
            <span>Consortium & Investor Relations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 text-balance">
            Partner with Quad Techtronix
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether you represent C-DAC, a tier-1 electronics OEM, an Indian university VLSI department, or a semiconductor venture fund, let’s accelerate India’s semiconductor self-reliance together.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Trust Markers & Direct Access */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#09120e] border border-slate-200 dark:border-emerald-900/50 space-y-5 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Consortium & Institutional Inquiries
              </h3>

              <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-950 rounded-lg border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block">Corporate & Lab Headquarters</span>
                    <span>Bengaluru & New Delhi Semiconductor Corridor, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-950 rounded-lg border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block">Official Communications</span>
                    <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">krhrishabh14@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-950 rounded-lg border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block">Regulatory & Export Control</span>
                    <span>Full adherence to GoI MeitY, C-DAC, and ISM Directives</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-emerald-950/80 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Registered Indian Startup eligible for Semicon India 2.0 Product Design-Linked Incentives (P-DLI) and Design Infrastructure Support (DIS).
              </div>
            </div>

            {/* Quick response commitment */}
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 text-xs text-emerald-900 dark:text-emerald-300 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white block">Turnaround Commitment</span>
              <p className="text-slate-600 dark:text-slate-400">
                All consortium inquiries from strategic agencies, OEMs, and academic researchers receive a technical response within 2 business days.
              </p>
            </div>
          </div>

          {/* Right Column: Inbound Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#09130e] border border-slate-200 dark:border-emerald-900/60 rounded-2xl p-6 sm:p-8 shadow-sm">
            {formSubmitted ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Inquiry Transmitted Successfully</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-emerald-700 dark:text-emerald-300">{formData.name}</strong>. Your consortium communication has been logged. Our leadership team will review your requirements under the selected Semicon 2.0 framework and reach out shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-lg cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. / Mr. / Ms. Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full py-2.5 px-3 bg-slate-50 dark:bg-[#060c09] border border-slate-300 dark:border-emerald-950 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Official Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full py-2.5 px-3 bg-slate-50 dark:bg-[#060c09] border border-slate-300 dark:border-emerald-950 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Organization / Institution</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. C-DAC / OEM / University"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full py-2.5 px-3 bg-slate-50 dark:bg-[#060c09] border border-slate-300 dark:border-emerald-950 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Designation / Role</label>
                    <input
                      type="text"
                      placeholder="e.g. Lead VLSI Architect / VP R&D"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full py-2.5 px-3 bg-slate-50 dark:bg-[#060c09] border border-slate-300 dark:border-emerald-950 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Partnership / Collaboration Track</label>
                  <select
                    value={formData.partnershipTrack}
                    onChange={(e) => setFormData({ ...formData, partnershipTrack: e.target.value })}
                    className="w-full py-2.5 px-3 bg-slate-50 dark:bg-[#060c09] border border-slate-300 dark:border-emerald-950 rounded-lg text-xs text-slate-900 dark:text-slate-200 focus:outline-none focus:border-emerald-500 font-mono"
                  >
                    <option value="Category 01: Strategic Silicon & C-DAC Co-development">
                      Category 01: Strategic Silicon & C-DAC Co-development
                    </option>
                    <option value="Category 02: Fabless Commercial Co-Investment & P-DLI">
                      Category 02: Fabless Commercial Co-Investment & P-DLI
                    </option>
                    <option value="Category 03: Commercial Deployment & OEM Licensing">
                      Category 03: Commercial Deployment & OEM Licensing
                    </option>
                    <option value="Category 04: Advanced Packaging & Silicon Photonics R&D">
                      Category 04: Advanced Packaging & Silicon Photonics R&D
                    </option>
                    <option value="Category 10: Academic VLSI Lab & MPW Shuttle Co-Sponsorship">
                      Category 10: Academic VLSI Lab & MPW Shuttle Co-Sponsorship
                    </option>
                    <option value="Angel / Venture Capital Investment">
                      Angel / Venture Capital Co-Investment
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Collaboration Scope / Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your target silicon requirements, wafer volumes, or consortium proposal..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full py-2.5 px-3 bg-slate-50 dark:bg-[#060c09] border border-slate-300 dark:border-emerald-950 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-all rounded-lg cursor-pointer"
                >
                  Send Official Consortium Request
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
