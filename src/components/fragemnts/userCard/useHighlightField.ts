import { useEffect, useRef, useState } from "react";
import { RandomUserData } from "types";

const DEFAULT_STATE = {
  first: false,
  last: false,
  largeImg: false,
  country: false,
};

const useHighlightField = (user: RandomUserData) => {
  const prevUser = useRef<RandomUserData | undefined>();
  const [highlight, setHighlight] = useState(DEFAULT_STATE);

  useEffect(() => {
    if (prevUser.current) {
      const {
        name: { first: prevFirst, last: prevLast },
        picture: { large: prevImg },
        location: { country: prevCountry },
      } = prevUser.current;

      const {
        name: { first, last },
        picture: { large: largeImg },
        location: { country },
      } = user;

      const highlight = {
        first: first !== prevFirst,
        last: last !== prevLast,
        largeImg: largeImg !== prevImg,
        country: country !== prevCountry,
      };
      setHighlight(highlight);
    }

    const timeoutId = setTimeout(() => {
      setHighlight(DEFAULT_STATE);
    }, 1000);

    prevUser.current = user;

    return () => clearTimeout(timeoutId);
  }, [user]);

  return highlight;
};

export default useHighlightField;
