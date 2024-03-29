import img from '../../assets/img/carac.jpg';
import styles from './style.module.css';

export default function Characteristics() {

   return (
      <section className={`container ${styles.caracteristicas}`}>
         <div className={styles.img}>
            <img src={img} alt='mulher se alongando'></img>
         </div>
         <ul className={styles.ul}>
            <li><p>Aulas gravadas & aulas ao vivo com profissionais especializados</p></li>
            <li><p>Treino personalizado para melhor atender sua necessidade</p></li>
            <li><p>Mais de 1000 gravadas aulas de diversas modalidades</p></li>
         </ul>
      </section>
   );
}