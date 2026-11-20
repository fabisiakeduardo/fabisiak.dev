const fieldDots = Array.from({ length: 25 }, (_, i) => {
  const x = 8 + (i % 5) * 12;
  const y = 8 + Math.floor(i / 5) * 12;
  const wave = 0.5 + 0.5 * Math.sin((x + y) / 14);
  return { x, y, r: 0.8 + 1.4 * wave, o: 0.25 + 0.65 * wave };
});

const glyphs = {
  broadcast: (
    <>
      <circle cx="12" cy="52" r="3" fill="currentColor" stroke="none" />
      <path d="M12 40a12 12 0 0 1 12 12" opacity="0.9" />
      <path d="M12 28a24 24 0 0 1 24 24" opacity="0.55" />
      <path d="M12 16a36 36 0 0 1 36 36" opacity="0.3" />
      <circle cx="36" cy="52" r="1.6" fill="currentColor" stroke="none" opacity="0.55" />
      <circle cx="48" cy="52" r="1.6" fill="currentColor" stroke="none" opacity="0.3" />
    </>
  ),
  orbit: (
    <>
      <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
      <ellipse cx="32" cy="32" rx="26" ry="10" transform="rotate(-24 32 32)" opacity="0.5" />
      <circle cx="56" cy="21" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="8" cy="43" r="1.6" fill="currentColor" stroke="none" opacity="0.5" />
    </>
  ),
  field: (
    <>
      {fieldDots.map((d) => (
        <circle
          key={`${d.x}-${d.y}`}
          cx={d.x}
          cy={d.y}
          r={d.r.toFixed(2)}
          fill="currentColor"
          stroke="none"
          opacity={d.o.toFixed(2)}
        />
      ))}
    </>
  ),
  flux: (
    <>
      <path d="M8 14h16c12 0 14 18 32 18" opacity="0.3" />
      <path d="M8 24h24c10 0 12 8 24 8" opacity="0.55" />
      <path d="M8 40h24c10 0 12 -8 24 -8" opacity="0.55" />
      <path d="M8 50h16c12 0 14 -18 32 -18" opacity="0.3" />
      <circle cx="56" cy="32" r="2.5" fill="currentColor" stroke="none" />
    </>
  ),
  ledger: (
    <>
      <path d="M10 14h28" opacity="0.8" />
      <path d="M44 15l3 3 7-7" />
      <path d="M10 26h28" opacity="0.55" />
      <circle cx="49" cy="26" r="3.5" />
      <path d="M10 38h28" opacity="0.55" />
      <path d="M52 38H42m0 0l4-4m-4 4l4 4" />
      <path d="M10 50h28" opacity="0.3" />
      <circle cx="49" cy="50" r="3.5" opacity="0.4" />
    </>
  ),
  trace: (
    <>
      <path d="M14 48h36" opacity="0.4" />
      <path d="M32 48V32" strokeDasharray="2 3" opacity="0.35" />
      <path d="M10 12l22 36" opacity="0.9" />
      <path d="M32 48l-8-22" opacity="0.7" />
      <path d="M32 48l4-20" opacity="0.55" />
      <path d="M32 48l14-16" opacity="0.4" />
      <path d="M32 48l22-10" opacity="0.25" />
      <circle cx="10" cy="12" r="2" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function Motif({ motif, className = "" }) {
  const glyph = glyphs[motif];
  if (!glyph) return null;
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      {glyph}
    </svg>
  );
}
