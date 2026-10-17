import React, { useState } from 'react';
import { QuadLogo } from './QuadLogo';
import { Download, Upload, RefreshCw, Check, Sparkles, X, ShieldCheck } from 'lucide-react';

interface LogoStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoStudioModal: React.FC<LogoStudioModalProps> = ({ isOpen, onClose }) => {
  const [activeBg, setActiveBg] = useState<'checker' | 'dark' | 'light'>('checker');
  const [copied, setCopied] = useState(false);
  const [uploadedMsg, setUploadedMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        localStorage.setItem('quad_custom_logo', result);
        window.dispatchEvent(new Event('quad_logo_updated'));
        setUploadedMsg('Custom transparent logo applied across the entire site!');
        setTimeout(() => setUploadedMsg(null), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetToVector = () => {
    localStorage.removeItem('quad_custom_logo');
    window.dispatchEvent(new Event('quad_logo_updated'));
    setUploadedMsg('Reset to built-in transparent vector logo.');
    setTimeout(() => setUploadedMsg(null), 3000);
  };

  const handleDownloadSVG = () => {
    const svgEl = document.querySelector('#preview-logo-container svg');
    if (!svgEl) return;
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'quad_techtronix_transparent_logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#0a110e] border border-emerald-800/80 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-emerald-950 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-950 rounded-lg border border-emerald-800 text-[#e5c158]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Quad Techtronix Logo & Transparency Studio
              </h3>
              <span className="text-xs font-mono text-emerald-400">
                100% Background-Free Transparent Silhouette
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-950 text-sm font-mono"
          >
            ✕
          </button>
        </div>

        {/* Status notification if uploaded */}
        {uploadedMsg && (
          <div className="p-3 bg-emerald-950/50 border border-emerald-500 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{uploadedMsg}</span>
          </div>
        )}

        {/* Background Preview Canvas */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span>Test Transparency on Backgrounds</span>
            <div className="flex items-center gap-1.5 p-1 bg-[#060c09] rounded-lg border border-emerald-950">
              <button
                onClick={() => setActiveBg('checker')}
                className={`px-2.5 py-1 text-[11px] rounded transition-colors ${
                  activeBg === 'checker' ? 'bg-emerald-900/60 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Checkerboard (Alpha)
              </button>
              <button
                onClick={() => setActiveBg('dark')}
                className={`px-2.5 py-1 text-[11px] rounded transition-colors ${
                  activeBg === 'dark' ? 'bg-emerald-900/60 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Dark Canvas
              </button>
              <button
                onClick={() => setActiveBg('light')}
                className={`px-2.5 py-1 text-[11px] rounded transition-colors ${
                  activeBg === 'light' ? 'bg-emerald-900/60 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Light Canvas
              </button>
            </div>
          </div>

          <div
            id="preview-logo-container"
            className={`w-full h-56 rounded-xl flex items-center justify-center p-6 border transition-all ${
              activeBg === 'checker'
                ? 'bg-[linear-gradient(45deg,#16201b_25%,transparent_25%),linear-gradient(-45deg,#16201b_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#16201b_75%),linear-gradient(-45deg,transparent_75%,#16201b_75%)] bg-[size:20px_20px] bg-[#0c1410] border-emerald-950'
                : activeBg === 'dark'
                ? 'bg-[#050807] border-emerald-950'
                : 'bg-slate-100 border-slate-300'
            }`}
          >
            <QuadLogo size="xl" glow={activeBg !== 'light'} />
          </div>
          <span className="text-[11px] font-mono text-emerald-400/80 block text-center">
            ✓ Zero black background bounding box · 100% transparent alpha channels
          </span>
        </div>

        {/* Actions: Download Transparent Asset & Custom Upload */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          
          <button
            onClick={handleDownloadSVG}
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-300 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
          >
            <Download className="w-4 h-4 text-[#e5c158]" />
            <span>Download Transparent SVG</span>
          </button>

          <label className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#e5c158] hover:bg-[#f6d26b] text-slate-950 rounded-lg text-xs font-semibold cursor-pointer transition-colors">
            <Upload className="w-4 h-4" />
            <span>Replace with Local PNG/SVG</span>
            <input
              type="file"
              accept="image/png,image/svg+xml,image/webp"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

        </div>

        {/* Reset Option */}
        <div className="flex items-center justify-between border-t border-emerald-950 pt-4 text-xs text-slate-400">
          <button
            onClick={handleResetToVector}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to Built-in Transparent Logo</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-emerald-950/60 text-slate-200 rounded border border-emerald-900 hover:bg-emerald-950"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
