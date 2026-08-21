export function GoogleIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.54 5.54 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.58-5.17 3.58-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.87-3c-1.08.72-2.46 1.15-4.08 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11A11.998 11.998 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.27A11.998 11.998 0 0 0 0 12c0 1.94.46 3.77 1.27 5.39l4-3.11Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.27 6.61l4 3.11C6.22 6.88 8.87 4.77 12 4.77Z"
      />
    </svg>
  )
}

export function MicrosoftIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="1" y="1" width="10" height="10" fill="#F35325" />
      <rect x="13" y="1" width="10" height="10" fill="#81BC06" />
      <rect x="1" y="13" width="10" height="10" fill="#05A6F0" />
      <rect x="13" y="13" width="10" height="10" fill="#FFBA08" />
    </svg>
  )
}

export function LinkedInIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M7.12 9.4H4.4V19.6h2.72V9.4Zm-1.36-4.4a1.58 1.58 0 1 0 0 3.16 1.58 1.58 0 0 0 0-3.16ZM19.6 13.84c0-3-1.6-4.4-3.74-4.4-1.72 0-2.49.95-2.92 1.61V9.4H10.2c.04.77 0 10.2 0 10.2h2.74v-5.7c0-.3.02-.6.11-.82.24-.6.79-1.23 1.71-1.23 1.21 0 1.7.92 1.7 2.27v5.48h2.74v-5.76Z"
      />
    </svg>
  )
}
