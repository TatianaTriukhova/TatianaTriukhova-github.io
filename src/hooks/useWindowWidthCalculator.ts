import { useEffect, useState } from "react";

const useWindowWidth = (): boolean => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 700);

  const calculateScreenSize = () => {
    if (window.innerWidth > 700) {
      setIsLargeScreen(true);
    } else setIsLargeScreen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", calculateScreenSize);
    return () => window.removeEventListener("resize", calculateScreenSize);
  }, []);

  return isLargeScreen;
};
export default useWindowWidth;
