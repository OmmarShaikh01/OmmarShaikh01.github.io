import { useEffect, useRef, useState } from "react";

export function useTypedEffect(titles: string[]) {
  const [display, setDisplay] = useState("");
  const titleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const TYPING_SPEED = 65;
    const DELETING_SPEED = 35;
    const PAUSE_AFTER_TYPE = 2000;
    const PAUSE_AFTER_DELETE = 500;

    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = titles[titleIndex.current];
      if (!isDeleting.current) {
        setDisplay(current.slice(0, charIndex.current));
        charIndex.current++;
        if (charIndex.current > current.length) {
          isDeleting.current = true;
          timeout = setTimeout(tick, PAUSE_AFTER_TYPE);
          return;
        }
        timeout = setTimeout(tick, TYPING_SPEED);
      } else {
        setDisplay(current.slice(0, charIndex.current));
        charIndex.current--;
        if (charIndex.current < 0) {
          isDeleting.current = false;
          titleIndex.current = (titleIndex.current + 1) % titles.length;
          charIndex.current = 0;
          timeout = setTimeout(tick, PAUSE_AFTER_DELETE);
          return;
        }
        timeout = setTimeout(tick, DELETING_SPEED);
      }
    }

    tick();
    return () => clearTimeout(timeout);
  }, [titles]);

  return display;
}
