import { useEffect, useRef } from "react";

/**
 * Hook to register a keypress
 * Modified from here: https://stackoverflow.com/a/42234988/15518036
 * @param {function} handler - Callback function ran when user presses key
 */

export default function useKeypressListener(handler) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    document.addEventListener("keydown", eventListener);
    return () => {
      document.removeEventListener("keydown", eventListener);
    };
  });
}
