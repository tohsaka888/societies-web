import {
  useState,
  useEffect,
  useCallback,
  MutableRefObject,
  RefObject,
} from "react";

export default function useScreenHeight(
  element: MutableRefObject<HTMLDivElement | HTMLElement> | RefObject<HTMLDivElement | HTMLElement>
): Number {
  const [height, setHeight] = useState<Number>(0);
  const scrollFunc = useCallback(() => {
    let height = element.current
      ? element.current.getBoundingClientRect().top
      : null;
    let bottom = element.current ?　element.current.getBoundingClientRect().bottom : null
    if (height && bottom) {
      if ((height >= 0 && height <= window.innerHeight) || (bottom >=0 && bottom <= window.innerHeight)) {
        setHeight(height);
      } else {
        setHeight(-1);
      }
    } else {
      setHeight(-1)
    }
  }, [element]);
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, [scrollFunc]);
  return height;
}
