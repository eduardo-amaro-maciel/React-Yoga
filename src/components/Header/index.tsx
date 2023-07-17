import { useEffect, useState, useRef } from 'react';
import useMedia from '../../hooks/useMedia';
import HeaderDefault from '../HeaderDefault';
import HeaderMobile from '../HeaderMobile';
import styles from './style.module.css';

export default function Header() {

   const { matches } = useMedia('(max-width: 1150px)');
   const [isPageScrolled, setIsPageScrolled] = useState(false);
   const ref = useRef<HTMLHeadingElement>(null);

   useEffect(() => {
      function scrollHeader() {
         if (window.scrollY !== 0) {
            setIsPageScrolled(true);
         } else {
            setIsPageScrolled(false);
         }
      }
      window.addEventListener('scroll', scrollHeader);
      return () => window.removeEventListener('scroll', scrollHeader);
   }, []);

   return (
      <header className={`${styles.header} ${isPageScrolled ? styles.headerScrolled : ''}`} ref={ref}>
         <div className={styles.containerHeader}>
            <nav className={styles.nav}>
               {matches ? <HeaderMobile /> : <HeaderDefault />}
            </nav>
         </div>
      </header>
   );
};