/** Fundo decorativo da tela 01 - LOGIN. */
export default function LoginBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(37,99,235,0.13),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(8,145,178,0.09),transparent_30%),linear-gradient(118deg,#020617_0%,#050b20_47%,#071331_100%)]" />

      <div className="login-backdrop-orb absolute -right-44 top-[18%] h-[560px] w-[560px] rounded-full bg-blue-600/[0.09] blur-[120px]" />
      <div className="login-backdrop-orb login-backdrop-orb--secondary absolute -bottom-72 left-[28%] h-[520px] w-[520px] rounded-full bg-cyan-500/[0.07] blur-[130px]" />

      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="etp-path-gradient" x1="0" y1="0" x2="1600" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#67e8f9" stopOpacity="0" />
            <stop offset="0.34" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="0.7" stopColor="#3b82f6" stopOpacity="0.62" />
            <stop offset="1" stopColor="#1d4ed8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="etp-ribbon-gradient" x1="240" y1="720" x2="1390" y2="610" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="0.48" stopColor="#0ea5e9" stopOpacity="0.12" />
            <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="etp-grid-mask" cx="0" cy="0" r="1" gradientTransform="translate(1240 560) rotate(90) scale(520 650)" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.72" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <pattern id="etp-dot-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.2" fill="#93c5fd" fillOpacity="0.16" />
          </pattern>
          <mask id="etp-grid-fade">
            <rect width="1600" height="1000" fill="url(#etp-grid-mask)" />
          </mask>
          <filter id="etp-path-blur" x="-20%" y="-30%" width="140%" height="160%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        <rect width="1600" height="1000" fill="url(#etp-dot-grid)" mask="url(#etp-grid-fade)" />

        <path
          d="M-120 910C170 694 398 899 688 744C963 597 1114 530 1398 610C1516 643 1603 635 1720 570L1720 735C1575 785 1450 754 1327 714C1098 638 945 685 713 813C397 988 161 815-120 1000Z"
          fill="url(#etp-ribbon-gradient)"
        />

        <g fill="none" strokeLinecap="round">
          <path
            d="M-90 840C184 648 412 872 700 710C947 571 1155 510 1420 602C1542 644 1640 614 1720 550"
            stroke="url(#etp-path-gradient)"
            strokeWidth="18"
            strokeOpacity="0.12"
            filter="url(#etp-path-blur)"
          />
          <path
            className="login-backdrop-path"
            d="M-90 840C184 648 412 872 700 710C947 571 1155 510 1420 602C1542 644 1640 614 1720 550"
            stroke="url(#etp-path-gradient)"
            strokeWidth="1.4"
          />
          <path
            className="login-backdrop-path login-backdrop-path--slow"
            d="M-130 927C180 785 425 944 766 781C1042 649 1291 690 1710 472"
            stroke="url(#etp-path-gradient)"
            strokeWidth="0.9"
            strokeOpacity="0.46"
          />
          <path
            d="M1006-80C1237 139 1161 321 1405 405C1532 449 1654 425 1734 353"
            stroke="url(#etp-path-gradient)"
            strokeWidth="0.8"
            strokeOpacity="0.2"
          />
        </g>

        <g className="login-backdrop-nodes">
          <circle cx="704" cy="708" r="3.5" fill="#67e8f9" fillOpacity="0.72" />
          <circle cx="947" cy="571" r="3" fill="#38bdf8" fillOpacity="0.62" />
          <circle cx="1178" cy="534" r="2.7" fill="#60a5fa" fillOpacity="0.58" />
          <circle cx="1420" cy="602" r="3.2" fill="#3b82f6" fillOpacity="0.68" />
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/48 to-[#061331]/18" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020617]/70 to-transparent" />
    </div>
  )
}
