import React, { useState, useEffect } from 'react';

interface QuadLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  glow?: boolean;
  onClick?: () => void;
}

export const QuadLogo: React.FC<QuadLogoProps> = ({
  size = 'md',
  showText = false,
  className = '',
  glow = true,
  onClick,
}) => {
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // Check if user uploaded a custom logo with background removed
    const saved = localStorage.getItem('quad_custom_logo');
    if (saved) {
      setCustomLogoUrl(saved);
    }

    const handleStorageChange = () => {
      const updated = localStorage.getItem('quad_custom_logo');
      setCustomLogoUrl(updated);
      setImgError(false);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('quad_logo_updated', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('quad_logo_updated', handleStorageChange);
    };
  }, []);

  const sizeMap = {
    sm: { box: 36, px: 'w-9 h-9', text: 'text-base' },
    md: { box: 48, px: 'w-12 h-12', text: 'text-lg' },
    lg: { box: 80, px: 'w-20 h-20', text: 'text-2xl' },
    xl: { box: 140, px: 'w-36 h-36', text: 'text-3xl' },
  };

  const current = sizeMap[size];
  const pngSrc = customLogoUrl || '/quad_logo.png';

  return (
    <div 
      className={`inline-flex items-center gap-3 ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className={`relative ${current.px} shrink-0 flex items-center justify-center`}>
        {glow && (
          <div 
            className="absolute inset-0 rounded-full bg-emerald-500/25 blur-md pointer-events-none -z-10"
            aria-hidden="true"
          />
        )}

        {!imgError ? (
          /* High-resolution attached PNG logo with transparent background */
          <img
            src={pngSrc}
            alt="Quad Techtronix Logo"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain drop-shadow-md select-none"
          />
        ) : (
          /* Vector Fallback */
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-md select-none overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Green PCB Solder Mask Gradients with Glass-Fiber Depth */}
              <linearGradient id="pcbGradTopLeft" x1="20" y1="20" x2="98" y2="98" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#124a2c" />
                <stop offset="60%" stopColor="#0e3f24" />
                <stop offset="100%" stopColor="#082515" />
              </linearGradient>

              <linearGradient id="pcbGradTopRight" x1="180" y1="20" x2="102" y2="98" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e6e44" />
                <stop offset="45%" stopColor="#114729" />
                <stop offset="100%" stopColor="#082515" />
              </linearGradient>

              <linearGradient id="pcbGradBottomLeft" x1="20" y1="180" x2="98" y2="102" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e6e44" />
                <stop offset="50%" stopColor="#114729" />
                <stop offset="100%" stopColor="#082515" />
              </linearGradient>

              <linearGradient id="pcbGradBottomRight" x1="180" y1="180" x2="102" y2="102" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#124a2c" />
                <stop offset="50%" stopColor="#0e3f24" />
                <stop offset="100%" stopColor="#082515" />
              </linearGradient>

              {/* Green Conductive Trace Gradient */}
              <linearGradient id="goldTrace" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="35%" stopColor="#10b981" />
                <stop offset="75%" stopColor="#059669" />
                <stop offset="100%" stopColor="#6ee7b7" />
              </linearGradient>

              {/* Rim Highlight Gradient */}
              <linearGradient id="rimGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3be688" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#105731" stopOpacity="0.2" />
              </linearGradient>

              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="#10b981" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* === PETAL 1: TOP-LEFT === */}
            <g id="petal-tl">
              {/* Flat top & left with rounded outer corner, exactly as in user's image */}
              <path
                d="M98 98 L24 98 L24 32 Q24 24 32 24 L98 24 Z"
                fill="url(#pcbGradTopLeft)"
                stroke="#1f7a49"
                strokeWidth="1.2"
              />
              <path
                d="M96 96 L27 96 L27 34 Q27 27 34 27 L96 27 Z"
                fill="none"
                stroke="url(#rimGlow)"
                strokeWidth="0.8"
                opacity="0.7"
              />

              {/* Vias along Top & Left straight edges */}
              <circle cx="28" cy="38" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="28" cy="50" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="28" cy="62" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="28" cy="74" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="28" cy="86" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />

              <circle cx="42" cy="28" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="56" cy="28" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="70" cy="28" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="84" cy="28" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />

              {/* Gold Routed Traces at 45° angles */}
              <path d="M42 28 L42 42 L58 58 L78 58 L96 76" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M56 28 L56 38 L68 50 L84 50 L96 62" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M70 28 L70 34 L80 44 L90 44 L96 50" stroke="url(#goldTrace)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M84 28 L84 32 L92 40 L96 40" stroke="url(#goldTrace)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

              <path d="M28 50 L38 50 L52 64 L72 64 L96 88" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 62 L34 62 L48 76 L68 76 L86 94" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 74 L38 84 L56 84 L66 94" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

              {/* SMD Resistors & ICs */}
              <rect x="62" y="52" width="7" height="3.5" rx="0.8" fill="#181a19" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <rect x="76" y="68" width="7" height="3.5" rx="0.8" fill="#181a19" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <rect x="44" y="66" width="6" height="3" rx="0.6" fill="#181a19" stroke="url(#goldTrace)" strokeWidth="0.6" />
            </g>

            {/* === PETAL 2: TOP-RIGHT === */}
            <g id="petal-tr">
              {/* Organic curved wing contour matching user's image */}
              <path
                d="M102 98 L176 98 C176 56 156 24 102 24 Z"
                fill="url(#pcbGradTopRight)"
                stroke="#1f7a49"
                strokeWidth="1.2"
              />
              <path
                d="M104 96 L171 96 C171 58 152 28 104 28 Z"
                fill="none"
                stroke="url(#rimGlow)"
                strokeWidth="0.8"
                opacity="0.7"
              />

              {/* Circular Gold Vias tracing the outer curved perimeter */}
              <circle cx="168" cy="42" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="154" cy="33" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="138" cy="28" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="120" cy="26" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />

              <circle cx="173" cy="58" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="174" cy="74" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="172" cy="88" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />

              {/* Gold Routed Traces */}
              <path d="M168 42 L150 60 L124 60 L104 80" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M154 33 L142 45 L126 45 L104 67" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M138 28 L128 38 L114 38 L104 48" stroke="url(#goldTrace)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

              <path d="M173 58 L158 73 L138 73 L118 93" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M174 74 L162 86 L144 86 L134 96" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

              {/* Realistic SOIC-8 Microchip Package with gold lead pins */}
              <rect x="134" y="52" width="10" height="7" rx="1" fill="#141815" stroke="url(#goldTrace)" strokeWidth="0.8" />
              {/* Pin legs */}
              <line x1="132" y1="54" x2="134" y2="54" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="132" y1="56" x2="134" y2="56" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="132" y1="58" x2="134" y2="58" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="144" y1="54" x2="146" y2="54" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="144" y1="56" x2="146" y2="56" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="144" y1="58" x2="146" y2="58" stroke="url(#goldTrace)" strokeWidth="0.8" />

              {/* SMD Resistor */}
              <rect x="116" y="66" width="7" height="3.5" rx="0.8" fill="#181a19" stroke="url(#goldTrace)" strokeWidth="0.8" />
            </g>

            {/* === PETAL 3: BOTTOM-LEFT (Specifically targeted by user focus) === */}
            <g id="petal-bl">
              {/* Organic curved leaf wing contour matching user's image */}
              <path
                d="M98 102 L24 102 C24 144 44 176 98 176 Z"
                fill="url(#pcbGradBottomLeft)"
                stroke="#1f7a49"
                strokeWidth="1.2"
              />
              <path
                d="M96 104 L28 104 C28 140 48 171 96 171 Z"
                fill="none"
                stroke="url(#rimGlow)"
                strokeWidth="0.8"
                opacity="0.7"
              />

              {/* Outer Circular Vias tracing the curved perimeter */}
              <circle cx="34" cy="158" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="48" cy="166" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="64" cy="170" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="80" cy="172" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />

              <circle cx="28" cy="144" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="26" cy="126" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="26" cy="110" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />

              {/* Gold Routed Traces */}
              <path d="M34 158 L52 140 L78 140 L96 122" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M48 166 L60 154 L76 154 L96 134" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M64 170 L72 162 L86 162 L96 152" stroke="url(#goldTrace)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

              <path d="M28 144 L44 128 L64 128 L84 108" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26 126 L40 112 L60 112 L66 106" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

              {/* SMD Resistor & SOIC Chip */}
              <rect x="56" y="138" width="7" height="3.5" rx="0.8" fill="#181a19" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <rect x="72" y="122" width="10" height="7" rx="1" fill="#141815" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="70" y1="124" x2="72" y2="124" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="70" y1="126" x2="72" y2="126" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="70" y1="128" x2="72" y2="128" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="82" y1="124" x2="84" y2="124" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="82" y1="126" x2="84" y2="126" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="82" y1="128" x2="84" y2="128" stroke="url(#goldTrace)" strokeWidth="0.8" />
            </g>

            {/* === PETAL 4: BOTTOM-RIGHT === */}
            <g id="petal-br">
              {/* Organic curved wing contour matching user's image */}
              <path
                d="M102 102 L176 102 C176 144 156 176 102 176 Z"
                fill="url(#pcbGradBottomRight)"
                stroke="#1f7a49"
                strokeWidth="1.2"
              />
              <path
                d="M104 104 L171 104 C171 140 152 171 104 171 Z"
                fill="none"
                stroke="url(#rimGlow)"
                strokeWidth="0.8"
                opacity="0.7"
              />

              {/* Circular Gold Vias */}
              <circle cx="166" cy="158" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="152" cy="166" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="136" cy="170" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="120" cy="172" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />

              <circle cx="172" cy="144" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="174" cy="126" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />
              <circle cx="174" cy="110" r="2.5" fill="#082515" stroke="url(#goldTrace)" strokeWidth="1.5" />

              {/* Gold Routed Traces */}
              <path d="M166 158 L148 140 L122 140 L104 122" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M152 166 L140 154 L124 154 L104 134" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M136 170 L128 162 L114 162 L104 152" stroke="url(#goldTrace)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

              <path d="M172 144 L156 128 L136 128 L116 108" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M174 126 L160 112 L140 112 L134 106" stroke="url(#goldTrace)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

              {/* SMD Resistors & IC */}
              <rect x="130" y="130" width="10" height="7" rx="1" fill="#141815" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="128" y1="132" x2="130" y2="132" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="128" y1="134" x2="130" y2="134" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="140" y1="132" x2="142" y2="132" stroke="url(#goldTrace)" strokeWidth="0.8" />
              <line x1="140" y1="134" x2="142" y2="134" stroke="url(#goldTrace)" strokeWidth="0.8" />

              <rect x="116" y="122" width="7" height="3.5" rx="0.8" fill="#181a19" stroke="url(#goldTrace)" strokeWidth="0.8" />
            </g>

            {/* Central Precision Contact Ring */}
            <circle cx="100" cy="100" r="4" fill="#10b981" filter="url(#goldGlow)" />
            <circle cx="100" cy="100" r="1.8" fill="#082515" />
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-tight text-black dark:text-white ${current.text} leading-none`}>
            QUAD <span className="text-emerald-600 dark:text-emerald-400">TECHTRONIX</span>
          </span>
          <span className="text-[10px] tracking-wider uppercase text-emerald-700 dark:text-emerald-400 font-semibold mt-1 font-mono">
            BY QUAD ENGINEERS
          </span>
        </div>
      )}
    </div>
  );
};
