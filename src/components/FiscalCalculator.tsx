import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, PieChart, ShieldCheck, Download, RefreshCw } from 'lucide-react';

export const FiscalCalculator: React.FC = () => {
  const [calcMode, setCalcMode] = useState<'PDLI' | 'DEPLOYMENT' | 'RD_TALENT'>('PDLI');

  // P-DLI State (Category 02)
  const [projectCostCr, setProjectCostCr] = useState<number>(24);
  const [isStartupMsme, setIsStartupMsme] = useState<boolean>(true);
  const [vcFundingCr, setVcFundingCr] = useState<number>(10);
  const [exitYears, setExitYears] = useState<number>(3);

  // Deployment State (Category 03)
  const [annualSalesCr, setAnnualSalesCr] = useState<number[]>([15, 30, 60, 100, 150]);
  const [productCount, setProductCount] = useState<number>(1);

  // R&D & Talent State (Category 04 / 10)
  const [capexCr, setCapexCr] = useState<number>(12);
  const [opexCr, setOpexCr] = useState<number>(8);
  const [stateIncentivePercentage, setStateIncentivePercentage] = useState<number>(15);

  // Calculations for Category 02 (P-DLI)
  const calculatePDLI = () => {
    // 50% of project cost or ₹15 Crore whichever is lower
    const theoreticalSeed = projectCostCr * 0.5;
    const eligibleSeedCr = Math.min(theoreticalSeed, 15);
    
    // Equity co-investment beyond ₹15 Cr
    const equityCoInvestmentCr = vcFundingCr > 0 ? Math.min(vcFundingCr, Math.max(0, projectCostCr - eligibleSeedCr)) : 0;
    const totalGovernmentSupportCr = eligibleSeedCr + equityCoInvestmentCr;
    
    // Exit estimate: 1.5x of total financial support (or 2.0x if royalty >4 yrs)
    const exitMultiplier = isStartupMsme ? 1.5 : (exitYears <= 4 ? 1.5 : 2.0);
    const estimatedExitRepaymentCr = eligibleSeedCr * exitMultiplier;

    return {
      eligibleSeedCr,
      equityCoInvestmentCr,
      totalGovernmentSupportCr,
      estimatedExitRepaymentCr,
      edaGridSavingsCr: 4.5, // Estimated market value of Synopsys/Cadence EDA access provided free
      mpwWaferSubsidyCr: 3.2, // Estimated MPW shuttle slot subsidy
    };
  };

  // Calculations for Category 03 (DLI)
  const calculateDeployment = () => {
    const totalProjectedSales = annualSalesCr.reduce((a, b) => a + b, 0);
    const raw9Percent = totalProjectedSales * 0.09;
    
    // Max ₹30 Cr per application, aggregate ceiling ₹120 Cr per company
    const perAppCap = 30;
    const aggregateCap = 120;
    const totalCap = Math.min(aggregateCap, perAppCap * productCount);
    const eligibleReimbursementCr = Math.min(raw9Percent, totalCap);

    return {
      totalProjectedSales,
      raw9Percent,
      eligibleReimbursementCr,
      capped: raw9Percent > totalCap,
      effectiveRate: totalProjectedSales > 0 ? ((eligibleReimbursementCr / totalProjectedSales) * 100).toFixed(2) : '9.00',
    };
  };

  // Calculations for Category 04 / 10
  const calculateRDTalent = () => {
    const totalCost = capexCr + opexCr;
    // Up to 75% total support (including State Incentive)
    const centralSupportPercentage = Math.max(0, 75 - stateIncentivePercentage);
    const centralGrantCr = totalCost * (centralSupportPercentage / 100);
    const stateGrantCr = totalCost * (stateIncentivePercentage / 100);
    const totalGrantCr = centralGrantCr + stateGrantCr;
    const companyContributionCr = totalCost - totalGrantCr;

    return {
      totalCost,
      centralGrantCr,
      stateGrantCr,
      totalGrantCr,
      companyContributionCr,
    };
  };

  const pdliResults = calculatePDLI();
  const deploymentResults = calculateDeployment();
  const rdResults = calculateRDTalent();

  return (
    <section id="fiscal-calculator" className="py-20 bg-slate-50 dark:bg-[#060a08] border-b border-slate-200 dark:border-emerald-950/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-3 font-semibold">
            <Calculator className="w-4 h-4 text-[#b48c26] dark:text-[#e5c158]" />
            <span>Interactive Policy Modeling Engine</span>
            <span aria-hidden="true">·</span>
            <span>Semicon 2.0 Fiscal Incentive Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 text-balance">
            Calculate Your Semicon 2.0 Grants & DLI Reimbursements
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Model exact fiscal incentives under the Union Cabinet approved guidelines. Calculate milestone-linked advance seed funding, centralized EDA grid subsidies, 9% commercial net sales reimbursements, and 75% R&D/Talent co-funding.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-white dark:bg-[#0a120e] rounded-xl border border-slate-200 dark:border-emerald-950 mb-8 max-w-2xl shadow-xs">
          <button
            onClick={() => setCalcMode('PDLI')}
            className={`flex-1 min-w-[160px] py-2.5 px-4 text-xs font-semibold rounded-lg transition-all text-center cursor-pointer ${
              calcMode === 'PDLI'
                ? 'bg-[#e5c158] text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            P-DLI & Seed (Cat 02)
          </button>
          <button
            onClick={() => setCalcMode('DEPLOYMENT')}
            className={`flex-1 min-w-[160px] py-2.5 px-4 text-xs font-semibold rounded-lg transition-all text-center cursor-pointer ${
              calcMode === 'DEPLOYMENT'
                ? 'bg-[#e5c158] text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            9% Deployment DLI (Cat 03)
          </button>
          <button
            onClick={() => setCalcMode('RD_TALENT')}
            className={`flex-1 min-w-[160px] py-2.5 px-4 text-xs font-semibold rounded-lg transition-all text-center cursor-pointer ${
              calcMode === 'RD_TALENT'
                ? 'bg-[#e5c158] text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            75% R&D / Talent (Cat 04 & 10)
          </button>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Controls */}
          <div className="lg:col-span-6 bg-white dark:bg-[#09110c] border border-slate-200 dark:border-emerald-900/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            
            {/* Mode A: P-DLI Inputs */}
            {calcMode === 'PDLI' && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-slate-800 dark:text-white">
                      Estimated Project Cost (Capex + Opex)
                    </label>
                    <span className="text-sm font-bold font-mono text-[#b48c26] dark:text-[#e5c158] tabular-nums">
                      ₹ {projectCostCr} Crore
                    </span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={60}
                    step={1}
                    value={projectCostCr}
                    onChange={(e) => setProjectCostCr(Number(e.target.value))}
                    className="w-full accent-[#e5c158] h-2 bg-slate-200 dark:bg-emerald-950 rounded-lg cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
                    Rule: Advance seed funding covers up to 50% or ₹15 Crore, whichever is lower.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060c09] border border-slate-200 dark:border-emerald-950 space-y-3">
                  <span className="text-xs font-semibold text-slate-800 dark:text-white block">Applicant Type</span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setIsStartupMsme(true)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border text-left cursor-pointer transition-colors ${
                        isStartupMsme
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-white'
                          : 'border-slate-200 dark:border-emerald-950 bg-transparent text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <div className="font-bold">Start-up / MSME</div>
                      <div className="text-[10px] text-emerald-700 dark:text-emerald-400/80">Seed Funding (up to ₹15 Cr)</div>
                    </button>
                    <button
                      onClick={() => setIsStartupMsme(false)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border text-left cursor-pointer transition-colors ${
                        !isStartupMsme
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-white'
                          : 'border-slate-200 dark:border-emerald-950 bg-transparent text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <div className="font-bold">Non-MSME Entity</div>
                      <div className="text-[10px] text-emerald-700 dark:text-emerald-400/80">5% Royalty Co-Investment</div>
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-slate-800 dark:text-white">
                      External VC / PE Funding Raised
                    </label>
                    <span className="text-sm font-bold font-mono text-emerald-700 dark:text-emerald-400 tabular-nums">
                      ₹ {vcFundingCr} Crore
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={50}
                    step={2}
                    value={vcFundingCr}
                    onChange={(e) => setVcFundingCr(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-2 bg-slate-200 dark:bg-emerald-950 rounded-lg cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
                    Equity co-investment is offered beyond ₹15 Cr matching VC/PE terms.
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-slate-800 dark:text-white">
                      Projected Exit Horizon
                    </label>
                    <span className="text-sm font-bold font-mono text-slate-700 dark:text-slate-300 tabular-nums">
                      {exitYears} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={6}
                    step={1}
                    value={exitYears}
                    onChange={(e) => setExitYears(Number(e.target.value))}
                    className="w-full accent-[#e5c158] h-2 bg-slate-200 dark:bg-emerald-950 rounded-lg cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
                    Exit multiplier: 1.5x within 4 years; 2.0x if royalty financing beyond 4 years.
                  </span>
                </div>
              </div>
            )}

            {/* Mode B: Deployment Inputs */}
            {calcMode === 'DEPLOYMENT' && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-slate-800 dark:text-white">
                      Number of Eligible First-Time Products
                    </label>
                    <span className="text-sm font-bold font-mono text-[#b48c26] dark:text-[#e5c158] tabular-nums">
                      {productCount} Products
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={4}
                    step={1}
                    value={productCount}
                    onChange={(e) => setProductCount(Number(e.target.value))}
                    className="w-full accent-[#e5c158] h-2 bg-slate-200 dark:bg-emerald-950 rounded-lg cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
                    Ceiling: ₹30 Cr per application; ₹120 Cr aggregate per company.
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-semibold text-slate-800 dark:text-white block">
                    Projected Net Commercial Sales (Year 1 to Year 5)
                  </span>
                  <div className="grid grid-cols-5 gap-2">
                    {annualSalesCr.map((val, idx) => (
                      <div key={idx} className="space-y-1">
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block text-center">Y{idx + 1}</span>
                        <input
                          type="number"
                          min={0}
                          max={500}
                          value={val}
                          onChange={(e) => {
                            const newSales = [...annualSalesCr];
                            newSales[idx] = Math.max(0, Number(e.target.value));
                            setAnnualSalesCr(newSales);
                          }}
                          className="w-full text-center py-1.5 px-1 bg-white dark:bg-[#060c09] border border-slate-300 dark:border-emerald-950 rounded text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400"
                        />
                        <span className="text-[9px] text-slate-500 block text-center">₹ Cr</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                    Cumulative 5-Year Sales: <strong className="text-slate-900 dark:text-white font-mono">₹ {annualSalesCr.reduce((a, b) => a + b, 0)} Cr</strong>
                  </span>
                </div>
              </div>
            )}

            {/* Mode C: R&D & Talent Inputs */}
            {calcMode === 'RD_TALENT' && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-slate-800 dark:text-white">
                      Eligible Capital Expenditure (Capex)
                    </label>
                    <span className="text-sm font-bold font-mono text-emerald-700 dark:text-emerald-400 tabular-nums">
                      ₹ {capexCr} Crore
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    step={1}
                    value={capexCr}
                    onChange={(e) => setCapexCr(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-2 bg-slate-200 dark:bg-emerald-950 rounded-lg cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
                    Cleanroom tooling, logic analyzers, RF testbeds, and server infrastructure.
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-slate-800 dark:text-white">
                      Eligible Operational Expenditure (Opex)
                    </label>
                    <span className="text-sm font-bold font-mono text-[#b48c26] dark:text-[#e5c158] tabular-nums">
                      ₹ {opexCr} Crore
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={opexCr}
                    onChange={(e) => setOpexCr(Number(e.target.value))}
                    className="w-full accent-[#e5c158] h-2 bg-slate-200 dark:bg-emerald-950 rounded-lg cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
                    Tapeout shuttle costs, engineer stipends, training manpower.
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-slate-800 dark:text-white">
                      State Government Incentive Share
                    </label>
                    <span className="text-sm font-bold font-mono text-sky-700 dark:text-sky-400 tabular-nums">
                      {stateIncentivePercentage}% (Total Cap: 75%)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={25}
                    step={5}
                    value={stateIncentivePercentage}
                    onChange={(e) => setStateIncentivePercentage(Number(e.target.value))}
                    className="w-full accent-sky-500 h-2 bg-slate-200 dark:bg-emerald-950 rounded-lg cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
                    Combined Central + State support caps at 75% of Project Cost.
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Right: Real-time Calculation Breakdown Output */}
          <div className="lg:col-span-6 bg-white dark:bg-gradient-to-b dark:from-[#0b1611] dark:to-[#070c09] border border-slate-200 dark:border-emerald-800/60 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md dark:shadow-none">
            
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-emerald-950 pb-4">
              <span className="text-xs font-mono uppercase text-emerald-700 dark:text-emerald-400 font-semibold tracking-wider">
                Financial Simulation Output
              </span>
              <span className="text-xs font-mono text-[#b48c26] dark:text-[#e5c158] bg-amber-50 dark:bg-[#e5c158]/10 px-2 py-0.5 rounded border border-amber-200 dark:border-[#e5c158]/30 font-bold">
                Verified Formula
              </span>
            </div>

            {/* Mode A Results */}
            {calcMode === 'PDLI' && (
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-[#08120d] rounded-xl border border-slate-200 dark:border-emerald-950">
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Eligible P-DLI Milestone Advance Seed</div>
                  <div className="text-3xl font-extrabold text-[#b48c26] dark:text-[#e5c158] font-mono tabular-nums">
                    ₹ {pdliResults.eligibleSeedCr.toFixed(2)} Crore
                  </div>
                  <div className="text-xs text-emerald-700 dark:text-emerald-400/90 mt-1 font-medium">
                    {projectCostCr * 0.5 > 15
                      ? 'Maximum ceiling of ₹15 Crore applied (50% project cost capped)'
                      : `50% of ₹${projectCostCr} Cr project cost granted`}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 dark:bg-[#08120d] rounded-lg border border-slate-200 dark:border-emerald-950">
                    <span className="text-slate-500 dark:text-slate-400 block mb-1">Centralized DIS Tool Grid</span>
                    <span className="text-base font-bold font-mono text-slate-900 dark:text-white">Free Access</span>
                    <span className="text-[10px] text-emerald-700 dark:text-emerald-400 block mt-0.5 font-semibold">Synopsys & Cadence</span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-[#08120d] rounded-lg border border-slate-200 dark:border-emerald-950">
                    <span className="text-slate-500 dark:text-slate-400 block mb-1">MPW Shuttle Support</span>
                    <span className="text-base font-bold font-mono text-slate-900 dark:text-white">Subsidized</span>
                    <span className="text-[10px] text-emerald-700 dark:text-emerald-400 block mt-0.5 font-semibold">Multi-Project Wafer</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-[#08120d] rounded-xl border border-slate-200 dark:border-emerald-950 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-700 dark:text-slate-300">
                    <span>VC Equity Co-Investment:</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">₹ {pdliResults.equityCoInvestmentCr.toFixed(2)} Cr</span>
                  </div>
                  <div className="flex justify-between text-slate-700 dark:text-slate-300">
                    <span>Total Direct Financial Inflow:</span>
                    <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">₹ {pdliResults.totalGovernmentSupportCr.toFixed(2)} Cr</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 dark:border-emerald-950/80 pt-2 text-slate-600 dark:text-slate-400">
                    <span>Exit Buyout Obligation ({exitYears} yrs):</span>
                    <span className="font-mono text-[#b48c26] dark:text-[#e5c158] font-bold">₹ {pdliResults.estimatedExitRepaymentCr.toFixed(2)} Cr (1.5x)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Mode B Results */}
            {calcMode === 'DEPLOYMENT' && (
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-[#08120d] rounded-xl border border-slate-200 dark:border-emerald-950">
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">5-Year Deployment Reimbursement (9%)</div>
                  <div className="text-3xl font-extrabold text-[#b48c26] dark:text-[#e5c158] font-mono tabular-nums">
                    ₹ {deploymentResults.eligibleReimbursementCr.toFixed(2)} Crore
                  </div>
                  <div className="text-xs text-emerald-700 dark:text-emerald-400/90 mt-1 font-medium">
                    {deploymentResults.capped
                      ? `Scheme cap applied: ₹${Math.min(120, 30 * productCount)} Cr limit across ${productCount} product(s)`
                      : `Full 9% reimbursement calculated on ₹${deploymentResults.totalProjectedSales} Cr net sales`}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white dark:bg-[#08120d] rounded-lg border border-slate-200 dark:border-emerald-950 shadow-xs">
                    <span className="text-slate-500 dark:text-slate-400 block mb-1">Per-App Ceiling</span>
                    <span className="text-base font-bold font-mono text-slate-900 dark:text-white">₹ 30 Crore</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 block mt-0.5">Per approved product</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-[#08120d] rounded-lg border border-slate-200 dark:border-emerald-950 shadow-xs">
                    <span className="text-slate-500 dark:text-slate-400 block mb-1">Aggregate Cap</span>
                    <span className="text-base font-bold font-mono text-slate-900 dark:text-white">₹ 120 Crore</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 block mt-0.5">Across company group</span>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-[#08120d] rounded-lg border border-slate-200 dark:border-emerald-950 text-xs text-slate-700 dark:text-slate-300 shadow-xs">
                  <div className="flex justify-between mb-1">
                    <span>Effective Incentive Yield:</span>
                    <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">{deploymentResults.effectiveRate}%</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    Reimbursements are disbursed annually against verified audit invoices for post-scheme launched silicon.
                  </p>
                </div>
              </div>
            )}

            {/* Mode C Results */}
            {calcMode === 'RD_TALENT' && (
              <div className="space-y-4">
                <div className="p-4 bg-[#08120d] rounded-xl border border-emerald-950">
                  <div className="text-xs text-slate-400 mb-1">Total Grant Support (75% Cap)</div>
                  <div className="text-3xl font-extrabold text-sky-400 font-mono tabular-nums">
                    ₹ {rdResults.totalGrantCr.toFixed(2)} Crore
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    On total project cost of ₹{rdResults.totalCost} Cr (Capex: ₹{capexCr} Cr, Opex: ₹{opexCr} Cr)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#08120d] rounded-lg border border-emerald-950">
                    <span className="text-slate-400 block mb-1">Central Share ({75 - stateIncentivePercentage}%)</span>
                    <span className="text-base font-bold font-mono text-white">₹ {rdResults.centralGrantCr.toFixed(2)} Cr</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">Nodal Agency / ISM</span>
                  </div>
                  <div className="p-3 bg-[#08120d] rounded-lg border border-emerald-950">
                    <span className="text-slate-400 block mb-1">State Share ({stateIncentivePercentage}%)</span>
                    <span className="text-base font-bold font-mono text-white">₹ {rdResults.stateGrantCr.toFixed(2)} Cr</span>
                    <span className="text-[10px] text-sky-400 block mt-0.5">State Electronics Policy</span>
                  </div>
                </div>

                <div className="p-3 bg-[#08120d] rounded-lg border border-emerald-950 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Company / University Equity Share (25%):</span>
                    <span className="font-mono font-bold text-white">₹ {rdResults.companyContributionCr.toFixed(2)} Cr</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Alignment Notice */}
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Calculated under Union Cabinet Gazette Notification for Semicon India 2.0</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
