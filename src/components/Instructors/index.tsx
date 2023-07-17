import { useEffect, useState } from 'react';
import useMedia from '../../hooks/useMedia';
import useSlide from '../../hooks/useSlide';
import styles from './style.module.css';

import image1 from '../../assets/img/inst1.jpg';
import image2 from '../../assets/img/inst2.jpg';
import image3 from '../../assets/img/inst3.jpg';
import image4 from '../../assets/img/inst4.jpg';
import image5 from '../../assets/img/inst5.jpg';
import image6 from '../../assets/img/inst6.jpg';

const instrutores = [
   {
      nome: 'Jean',
      descricao: 'Maecenas eget ultricies enim',
      img: image1
   },
   {
      nome: 'Jéssica',
      descricao: 'Maecenas eget ultricies enim',
      img: image2
   },
   {
      nome: 'Ana',
      descricao: 'Maecenas eget ultricies enim',
      img: image3
   },
   {
      nome: 'Felipe',
      descricao: 'Maecenas eget ultricies enim',
      img: image4
   },
   {
      nome: 'Lívia',
      descricao: 'Maecenas eget ultricies enim',
      img: image5
   },
   {
      nome: 'Mark',
      descricao: 'Maecenas eget ultricies enim',
      img: image6
   },
];

export default function Instructor() {

   const [itensAtATime, setItensAtATime] = useState(4);
   const { slideNext, slidePrev, positionWidth, containerSlideRef, setSlidePosition } = useSlide(itensAtATime);
   const matchMedium = useMedia('(max-width: 800px)').matches;
   const matchSmall = useMedia('(max-width: 550px)').matches;
   const matchExtraSmall = useMedia('(max-width: 390px)').matches;

   useEffect(() => {
      function changeItensAtATime() {
         if (matchExtraSmall) {
            setItensAtATime(1);
         } else if (matchSmall) {
            setItensAtATime(2);
         } else if (matchMedium) {
            setItensAtATime(3);
         } else {
            setItensAtATime(4);
         }
      }
      setSlidePosition(0);
      changeItensAtATime();
      window.addEventListener('resize', changeItensAtATime);
      return () => {
         window.removeEventListener('resize', changeItensAtATime);
      };

   }, [matchMedium, matchSmall, setSlidePosition, matchExtraSmall]);

   return (
      <section className={`container ${styles.instrutores}`}>
         <h2>Conheça os instrutores</h2>
         <div className={styles.btns}>
            <button onClick={slidePrev} aria-label='instrutor anterior'>Anterior</button>
            <button onClick={slideNext} aria-label='proximo instrutor'>Próximo</button>
         </div>
         <div className={styles.containerInstrutores}>
            <ul className={styles.listaInstrutores} ref={containerSlideRef} style={{ left: `${positionWidth}px` }} >
               {instrutores.map(instrutor => (
                  <li key={instrutor.nome}>
                     <a href='/'>
                        <img src={instrutor.img} alt={instrutor.nome} className={styles.img}></img>
                        <p className={styles.nome}>{instrutor.nome}</p>
                        <p>{instrutor.descricao}dsd</p>
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
};