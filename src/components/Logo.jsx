// Custom logo: a hexagon with a neon blue outline and the initial "J". Drawn as inline SVG, so no image file is needed.
export default function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Juan logo">
      <polygon points="50,4 91,27 91,73 50,96 9,73 9,27" fill="#05070D" stroke="#00B7FF" strokeWidth="5" />
      <text x="50" y="68" textAnchor="middle" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fontSize="46" fill="#00B7FF">J</text>
    </svg>
  );
}
