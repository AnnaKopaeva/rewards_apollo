import { useEffect, RefObject } from "react";

const clickAwayListener = (ref: RefObject<any>, callback: () => void) => {
  useEffect(() => {
    const handleClickAway = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [ref]);
};

export default clickAwayListener;
