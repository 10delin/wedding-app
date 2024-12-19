import { useCallback } from "react";

const useSmoothScroll = (offset = 0) => {
  const scrollToElement = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [offset]);

  return scrollToElement;
};

export default useSmoothScroll;