/** Reusable shield SVG used in Nav and Footer */
export default function ShieldLogo({ size = 38 }) {
  return (
    <svg
      className="shield-icon"
      width={size}
      height={size}
      viewBox="0 0 50 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 2L4 12V32C4 44 14 54 25 58C36 54 46 44 46 32V12L25 2Z"
        fill="rgba(200,168,75,0.12)"
        stroke="#c8a84b"
        strokeWidth="1.5"
      />
      <path
        d="M25 9L10 17V32C10 41 17 49 25 52C33 49 40 41 40 32V17L25 9Z"
        fill="rgba(200,168,75,0.08)"
        stroke="#c8a84b"
        strokeWidth="1"
      />
      <path
        d="M18 30L23 35L32 25"
        stroke="#c8a84b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
