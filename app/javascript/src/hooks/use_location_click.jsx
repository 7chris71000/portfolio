import { useEffect, useRef } from "react";

/**
 * Hook to register a click inside or outside of the passed ref
 * Modified from here: https://stackoverflow.com/a/42234988/15518036
 * @param {function} onInsideClick - Callback function ran when user clicks inside the ref
 * @param {function} onOutsideClick - Callback function ran when user clicks outside of ref
 */
export default function useLocationClick(onInsideClick, onOutsideClick) {
  const ref = useRef(null);

  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onOutsideClick();
    } else {
      onInsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });

  return { ref };
}
