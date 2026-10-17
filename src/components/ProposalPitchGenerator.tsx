import React, { useState } from 'react';
import { FileText, Copy, Check, Download, Printer, Shield, ArrowRight, Sparkles } from 'lucide-react';

interface ProposalPitchGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalPitchGenerator: React.FC<ProposalPitchGeneratorProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [proposalData, setProposalData] = useState({
    category: 'Category 02: Commercial Fabless Chip Design',
    projectTitle: 'Quad-Core Neuromorphic Edge-AI RISC-V SoC for Smart Infrastructure',
    applicantName: 'QUAD TECHTRONIX PRIVATE LIMITED',
    founderLead: 'K. R. Hrishabh (Founder & Chief Architect, B.Tech ECE)',
    processNode: '22nm FD-SOI (Low Power RF/Digital)',
    foundryShuttle: 'Semicon 2.0 Centralized MPW Allocation',
    consortiumMode: 'Consortium with Premier Indian Academic & Research Labs',
    estimatedCapexCr: '14.50',
    estimatedOpexCr: '9.50',
    pDliRequestedCr: '12.00',
    cdacCoOwnership: 'Compliant with MeitY / ISM Co-Ownership Clauses',
    sovereignIpLocation: 'All RTL, GDSII and design files retained strictly within India',
  });

  if (!isOpen) return null;

  const totalCostCr = (parseFloat(proposalData.estimatedCapexCr || '0') + parseFloat(proposalData.estimatedOpexCr || '0')).toFixed(2);

  const dossierText = `================================================================================
SEMICON INDIA 2.0 · PROJECT PROPOSAL EXECUTIVE DOSSIER
Applicant Company: ${proposalData.applicantName}
Founder Lead: ${proposalData.founderLead}
================================================================================

1. SCHEME CATEGORY & ALIGNMENT
- Selected Scheme: ${proposalData.category}
- National Directive: Semicon India 2.0 (₹1,27,500 Crore Union Cabinet Outlay)
- Primary Nodal Agency: India Semiconductor Mission (ISM) / C-DAC

2. PROJECT IDENTIFICATION
- Project Title: ${proposalData.projectTitle}
- Target Silicon Node: ${proposalData.processNode}
- Preferred Fabrication Track: ${proposalData.foundryShuttle}
- Consortium Mode: ${proposalData.consortiumMode}

3. FISCAL SUPPORT & BUDGET BREAKDOWN
- Eligible Capital Expenditure (Capex): ₹ ${proposalData.estimatedCapexCr} Crore
- Eligible Operational Expenditure (Opex): ₹ ${proposalData.estimatedOpexCr} Crore
- Total Project Cost: ₹ ${totalCostCr} Crore
- Requested P-DLI Milestone Seed Support: ₹ ${proposalData.pDliRequestedCr} Crore
- Design Infrastructure Support (DIS): Centralized access to Synopsys/Cadence EDA Grid and MPW shuttle allocation

4. STRATEGIC COMPLIANCE & SOVEREIGNTY UNDERTAKINGS
- IP Ownership: Co-owned with C-DAC / Applicant as per GoI guidelines
- Design File Security: ${proposalData.sovereignIpLocation}
- Export Control: 100% compliance with GoI security and defense export directives
- Deployment Commitment: 6-Year lifecycle support and long-term upgrades

================================================================================
Generated via Quad Techtronix Proposal Modeling Engine
Quad Techtronix · Deep-Tech Semiconductor Innovator
================================================================================`;

  const handleCopy = () => {
    navigator.clipboard.writeText(dossierText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-[#09110d] border border-emerald-800/80 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-emerald-950 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-950 rounded-lg border border-emerald-800">
              <FileText className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Semicon 2.0 Project Dossier & Pitch Generator
              </h2>
              <span className="text-xs font-mono text-emerald-400">
                Official MeitY / ISM Policy-Aligned Specification Builder
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-950 text-sm font-mono"
          >
            ESC ✕
          </button>
        </div>

        {/* Configuration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          
          <div>
            <label className="text-slate-300 font-medium block mb-1">Semicon 2.0 Category</label>
            <select
              value={proposalData.category}
              onChange={(e) => setProposalData({ ...proposalData, category: e.target.value })}
              className="w-full py-2 px-2.5 bg-[#060c09] border border-emerald-950 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 font-mono"
            >
              <option value="Category 01: National Strategic & Critical Infrastructure (C-DAC Co-development)">
                Category 01: National Strategic & Critical Infrastructure
              </option>
              <option value="Category 02: Commercial Fabless Chip Design (P-DLI & DIS Tools Grid)">
                Category 02: Commercial Fabless Chip Design (P-DLI)
              </option>
              <option value="Category 03: Deployment-Linked Incentive (9% Net Sales Reimbursement)">
                Category 03: Deployment-Linked Incentive (9% Net Sales)
              </option>
              <option value="Category 04: Advanced R&D, Packaging & Silicon Photonics (75% Co-funding)">
                Category 04: Advanced R&D Packaging & Photonics (75%)
              </option>
              <option value="Category 10: Talent Development & VLSI Lab (75% Co-funding)">
                Category 10: Talent Development & VLSI Lab (75%)
              </option>
            </select>
          </div>

          <div>
            <label className="text-slate-300 font-medium block mb-1">Target Silicon Process Node</label>
            <select
              value={proposalData.processNode}
              onChange={(e) => setProposalData({ ...proposalData, processNode: e.target.value })}
              className="w-full py-2 px-2.5 bg-[#060c09] border border-emerald-950 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 font-mono"
            >
              <option value="28nm High-K Metal Gate (HKMG)">28nm High-K Metal Gate (HKMG)</option>
              <option value="22nm Fully Depleted SOI (FD-SOI)">22nm Fully Depleted SOI (FD-SOI)</option>
              <option value="0.18µm GaN-on-Silicon BCD High Voltage">0.18µm GaN-on-Silicon BCD High Voltage</option>
              <option value="2.5D / 3D Heterogeneous Chiplet Interposer">2.5D / 3D Heterogeneous Chiplet Interposer</option>
              <option value="SkyWater 130nm Open-Source PDK">SkyWater 130nm Open-Source PDK</option>
            </select>
          </div>

          <div>
            <label className="text-slate-300 font-medium block mb-1">Project Proposal Title</label>
            <input
              type="text"
              value={proposalData.projectTitle}
              onChange={(e) => setProposalData({ ...proposalData, projectTitle: e.target.value })}
              className="w-full py-2 px-2.5 bg-[#060c09] border border-emerald-950 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="text-slate-300 font-medium block mb-1">Consortium Participation Mode</label>
            <select
              value={proposalData.consortiumMode}
              onChange={(e) => setProposalData({ ...proposalData, consortiumMode: e.target.value })}
              className="w-full py-2 px-2.5 bg-[#060c09] border border-emerald-950 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 font-mono"
            >
              <option value="Independent Indian Startup (Quad Techtronix)">Independent Indian Startup (Quad Techtronix)</option>
              <option value="Consortium with C-DAC & Strategic Nodal Labs">Consortium with C-DAC & Strategic Nodal Labs</option>
              <option value="Consortium with Premier Indian Academic Labs (IIT/NIT)">Consortium with Premier Indian Academic Labs (IIT/NIT)</option>
              <option value="Industry Consortium with Global Foundry Partner">Industry Consortium with Global Foundry Partner</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="text-slate-400 block mb-1">Capex (₹ Cr)</label>
              <input
                type="number"
                value={proposalData.estimatedCapexCr}
                onChange={(e) => setProposalData({ ...proposalData, estimatedCapexCr: e.target.value })}
                className="w-full py-2 px-2 bg-[#060c09] border border-emerald-950 rounded-lg text-slate-200 font-mono text-center"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Opex (₹ Cr)</label>
              <input
                type="number"
                value={proposalData.estimatedOpexCr}
                onChange={(e) => setProposalData({ ...proposalData, estimatedOpexCr: e.target.value })}
                className="w-full py-2 px-2 bg-[#060c09] border border-emerald-950 rounded-lg text-slate-200 font-mono text-center"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">P-DLI Seed (₹ Cr)</label>
              <input
                type="number"
                value={proposalData.pDliRequestedCr}
                onChange={(e) => setProposalData({ ...proposalData, pDliRequestedCr: e.target.value })}
                className="w-full py-2 px-2 bg-[#060c09] border border-emerald-950 rounded-lg text-emerald-400 font-mono text-center font-bold"
              />
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="p-2.5 bg-emerald-950/40 border border-emerald-900 rounded-lg text-[11px] text-slate-300">
              Total Budget: <strong className="text-white font-mono">₹ {totalCostCr} Cr</strong> · Max P-DLI Seed: <strong className="text-emerald-400 font-mono">₹ 15.00 Cr (50% cap)</strong>
            </div>
          </div>

        </div>

        {/* Live Preview Box */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-slate-400">
              Generated Application Dossier Preview
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-emerald-950 text-emerald-300 rounded border border-emerald-800 hover:bg-emerald-900 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Dossier'}</span>
              </button>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-slate-900 text-slate-300 rounded border border-slate-700 hover:bg-slate-800 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Dossier</span>
              </button>
            </div>
          </div>

          <pre className="p-4 bg-[#050906] border border-emerald-950 rounded-xl text-[11px] font-mono text-emerald-300/90 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
            {dossierText}
          </pre>
        </div>

        {/* Compliance Footer */}
        <div className="flex items-center justify-between border-t border-emerald-950 pt-4 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Ready for C-DAC & MeitY Nodal Technical Screening</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
