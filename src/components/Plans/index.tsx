import { useState, useRef, useEffect } from 'react';
import useMedia from '../../hooks/useMedia';
import useSlide from '../../hooks/useSlide';
import styles from './style.module.css';
import Plan from '../Plan';

const planos = [
   {
      preco: 159.00,
      nome: 'Yoga'
   },
   {
      preco: 319.00,
      nome: 'Completo'
   },
   {
      preco: 129.00,
      nome: 'Pilates'
   },
   {
      preco: 109.00,
      nome: 'Meditaçao'
   }
];

export default function Plans() {

   const [itensAtATime, setItensAtATime] = useState(3);
   const { slideNext, slidePrev, positionWidth, containerSlideRef, setSlidePosition } = useSlide(itensAtATime);
   const matchMedium = useMedia('(max-width: 800px)').matches;
   const matchSmall = useMedia('(max-width: 550px)').matches;

   useEffect(() => {
      function changeItensAtATime() {
         if (matchSmall) {
            setItensAtATime(1);
         } else if (matchMedium) {
            setItensAtATime(2);
         } else {
            setItensAtATime(3);
         }
      }
      setSlidePosition(0);
      changeItensAtATime();
      window.addEventListener('resize', changeItensAtATime);
      return () => {
         window.removeEventListener('resize', changeItensAtATime);
      };

   }, [matchMedium, matchSmall, setSlidePosition]);

   return (
      <section className={`container ${styles.planos}`}>
         <header className={styles.header}>
            <h2>Nossos planos</h2>
            <div className={styles.btns}>
               <button onClick={slidePrev} aria-label='plano anterior'>Anterior</button>
               <button onClick={slideNext} aria-label='proximo plano'>Próximo</button>
            </div>
         </header>
         <div className={styles.containerPlanos}>
            <ul className={styles.listaPlanos} style={{ left: `${positionWidth}px` }} ref={containerSlideRef}>
               {planos.map(plano =>
                  <Plan plano={plano.nome} preco={plano.preco} key={plano.nome} />
               )}
            </ul>
         </div>
         <a href='/' className={`btnPreto ${styles.linkComecar}`}>Comece o teste de 7 dias grátis</a>
      </section >
   );
};