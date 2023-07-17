import { useEffect, useState } from "react";

export default function useMedia(maxWidth: string) {

   const [matches, setMatches] = useState();

   useEffect(() => {
      function match() {
         setMatches(window.matchMedia(maxWidth).matches as any);
      }
      match();
      window.addEventListener('resize', match);
      return () => {
         window.removeEventListener('resize', match);
      };
   }, [maxWidth]);

   return { matches };
}