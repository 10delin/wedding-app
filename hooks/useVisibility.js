import { useState, useEffect, useRef } from "react";

const useVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setIsVisible(true);
          setHasBeenVisible(true); // Marcar como visible por primera vez
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.disconnect();
    };
  }, [hasBeenVisible]); // Dependencia para que solo observe mientras no haya sido visible

  return { isVisible, elementRef };
};

export default useVisibility;
