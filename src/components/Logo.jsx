// Custom logo: a hexagon in the Colombian flag colors with the initial "J". Drawn as inline SVG, so no image file is needed.
export default function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Juan logo">
      <polygon points="50,4 91,27 91,73 50,96 9,73 9,27" fill="#1E3A8A" />
      <polygon points="50,4 91,27 91,50 9,50 9,27" fill="#FCD116" />
      <polygon points="9,73 50,96 91,73 91,50 9,50" fill="#CE1126" opacity="0.0" />
      <text x="50" y="72" textAnchor="middle" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fontSize="46" fill="#fff">J</text>
    </svg>
  );
}
