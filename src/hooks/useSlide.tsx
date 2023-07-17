import { useState, useEffect, useCallback, useRef } from "react";

export default function useSlide(itensLength: number) {
   const [positionWidth, setPositionWidth] = useState(0);
   const [slidePosition, setSlidePosition] = useState(0);
   const containerSlideRef = useRef<HTMLElement | null>(null);

   useEffect(() => {
      const containerWidth = containerSlideRef.current?.getBoundingClientRect()?.width;
      if (containerWidth) {
         setPositionWidth(-((containerWidth / itensLength) * slidePosition));
      }
   }, [slidePosition, itensLength]);

   const slideNext = useCallback(() => {
      if (
         containerSlideRef.current &&
         containerSlideRef.current.children.length > 0 &&
         slidePosition < containerSlideRef.current.children.length - itensLength
      ) {
         setSlidePosition(slidePosition + 1);
      }
   }, [slidePosition, itensLength]);

   const slidePrev = useCallback(() => {
      if (slidePosition !== 0) {
         setSlidePosition(slidePosition - 1);
      }
   }, [slidePosition]);

   return { slideNext, slidePrev, positionWidth, containerSlideRef, setSlidePosition };
}
