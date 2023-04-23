import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const size = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    size();

    window.addEventListener("resize", size);

    return () => window.removeEventListener("resize", size);
  }, []);

  return windowSize;
};

export default useWindowSize;
