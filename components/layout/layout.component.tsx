import styles from './layout.module.css';
import Link from 'next/link';
import LOGO from './../../public/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export default function Layout(props: any) {
    const { asPath } = useRouter();
    const getActiveElement = (): string => {
        return asPath === '/' ? 'home' : asPath === '/portfolio' ? 'portfolio' : 'about';
    }
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Image src={LOGO} alt="logo" width={76} objectFit="contain" />
                </div>
                <div className={`${styles.nav_list}`}>
                    <ul className={`${styles[getActiveElement() + '_active']}`}>
                        <li className={`${styles.nav_item} ${asPath === '/' ? styles.h_active : ''}`}><Link href="/">Home</Link></li>
                        <li className={`${styles.nav_item} ${asPath === '/portfolio' ? styles.p_active : ''}`}><Link href="/portfolio">Portfolio</Link></li>
                        <li className={`${styles.nav_item} ${asPath === '/about' ? styles.a_active : ''}`}><Link href="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
            <main className={styles.page_layout}>
                {props.children}
            </main>
            <footer className={styles.footer}>
                <p className={styles.copyright}>© 2021 Virija Tejavath | virijaxx@gmail.com</p>
                <div className={styles.icons}>
                    <div className={styles.icon_circle}>
                      <FontAwesomeIcon className={styles.icon} icon={faBehance} />
                    </div>
                    <div className={styles.icon_circle}>
                      <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} />
                    </div>
                </div>
            </footer>
        </div>
    )
}
