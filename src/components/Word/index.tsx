import styles from './style.module.css';
import foto from '../../assets/img/pc.jpg';

export default function Word() {

   return (
      <section className={`container ${styles.fraseContainer}`}>
         <figure className={styles.citation}>
            <blockquote>
               Aliquam pulvinar pellentesque felis, non efficitur nulla dictum at. Vestibulum ultricies leo vitae dui tincidunt malesuada.
            </blockquote>
            <figcaption>Lorem ipsum</figcaption>
         </figure>
         <div className={styles.img}>
            <img src={foto} alt='Mulher mexendo no notebook'></img>
         </div>
      </section>
   );
};