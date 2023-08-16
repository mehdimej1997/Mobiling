import { RefObject, useEffect } from "react";

interface UseClickOutsideProps<T = Node> {
  ref: RefObject<T>;
  callback: () => void;
}

export function useClickOutside({ ref, callback }: UseClickOutsideProps) {
  useEffect(() => {
    document.addEventListener("touchstart", (event) => {
      if (ref?.current?.contains(event.target as Node)) return;
      callback();
    });
    return document.removeEventListener("touchstart", () =>
      console.log("touch outside")
    );
  }, []);
  return;
}
