import { useState } from "react";

// Shows an image from /public/images. If the file is missing, a colored placeholder appears instead.
export default function Img({ src, alt, className = "" }) {
  const [isMissing, setIsMissing] = useState(false);
  if (isMissing) return <div className={`img-fallback ${className}`} role="img" aria-label={alt}>{alt}</div>;
  return <img className={className} src={src} alt={alt} onError={() => setIsMissing(true)} />;
}
