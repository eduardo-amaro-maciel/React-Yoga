import styles from './style.module.css';

export default function Plan({ preco, plano }: { preco: number, plano: string; }) {

   return (
      <li className={styles.itemPlano}>
         <h3 className={styles.modalidade}>{plano}</h3>
         <div className={styles.precos}>
            <span className={styles.rs}>R$</span>
            <span className={styles.valor}>{preco}</span>
            <span className={styles.aomes}>ao mes</span>
         </div>
         <ul className={styles.lista}>
            <li>Cras vulputate porta tortor</li>
            <li>Vivamus efficitur libero sit</li>
            <li>Aliquam a felis sit amet</li>
            <li>Ut tristique sem sed ante egestas</li>
            <li>Sed commodo urna in congue feugiat</li>
            <li>Suspendisse faucibus turpis</li>
         </ul>
         <a href='/' className={`btnPreto ${styles.btnAssinar}`}>Assinar plano</a>
      </li>
   );
};