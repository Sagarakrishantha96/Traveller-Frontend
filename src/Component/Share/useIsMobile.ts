import { useEffect, useState } from "react";

const MOBILE_QUERY = "(max-width: 786px)";

// Watches the screen size, so pages can switch between mobile and desktop styles
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(window.matchMedia(MOBILE_QUERY).matches);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const handleResize = () => setIsMobile(media.matches);
    media.addEventListener("change", handleResize);
    return () => media.removeEventListener("change", handleResize);
  }, []);

  return isMobile;
}
