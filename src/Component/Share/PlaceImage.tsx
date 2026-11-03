import React, { useState } from "react";
import { Color } from "./Theme";

// Emoji shown when there is no photo, by attraction category or stay type
const icons: Record<string, string> = {
  Heritage: "🏛️", Nature: "🌿", Wildlife: "🐘", Religious: "🛕", Adventure: "🧗",
  Beach: "🏖️", Viewpoint: "🌄", Other: "✨",
  Hotel: "🏨", Villa: "🏡", Homestay: "🏠", Guesthouse: "🛏️", Resort: "🌴",
  Bus: "🚌", Train: "🚆", Car: "🚗"
};

const gradients = [
  `linear-gradient(135deg, ${Color.Primary} 0%, ${Color.PrimaryDark} 100%)`,
  `linear-gradient(135deg, ${Color.Accent} 0%, #E76F51 100%)`,
  "linear-gradient(135deg, #2A9D8F 0%, #264653 100%)",
  "linear-gradient(135deg, #8AB17D 0%, #2A9D8F 100%)"
];

interface PlaceImageProps {
  src: string | null | undefined;
  alt: string;
  kind: string;                 // category or type, picks the fallback icon
  style?: React.CSSProperties;
}

// A photo that falls back to a coloured tile with an icon when missing or broken
export const PlaceImage: React.FC<PlaceImageProps> = ({ src, alt, kind, style }) => {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)}
      style={{ objectFit: "cover", display: "block", ...style }} />;
  }

  const gradient = gradients[alt.length % gradients.length];
  return (
    <div role="img" aria-label={alt}
      style={{ display: "flex", alignItems: "center", justifyContent: "center", background: gradient, fontSize: "2.4em", ...style }}>
      {icons[kind] ?? "✨"}
    </div>
  );
};
