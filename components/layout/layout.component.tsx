import styles from './layout.module.css';
import Link from 'next/link';
import LOGO from './../../public/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';


export default function Layout(props: any) {
    const { asPath } = useRouter();
    const [isSidePanelOpen, setIsSidePanelOpen] = useState({
        trigger: false,
        action: false,
    });

    useEffect(() => {
        closeSidePanelHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [asPath])

    const closeSidePanelHandler = () => {
        setIsSidePanelOpen({...isSidePanelOpen, trigger: true});
        setTimeout(() => {
            setIsSidePanelOpen({
                trigger: false,
                action: false,
            });
        }, 500);
    }

    const getActiveElement = (): string => {
        return asPath === '/' ? 'home' : asPath === '/portfolio' ? 'portfolio' : 'about';
    }
    return (
        <div>
            <nav className={styles.nav}>
                <p className={styles.nav_icon}>
                    <FontAwesomeIcon className={styles.menu_icon} icon={faBars} onClick={() => setIsSidePanelOpen({...isSidePanelOpen, action: true})} />
                </p>
                <div className={styles.logo}>
                    <Image layout="fill" src={LOGO} alt="logo" objectFit="contain" />
                </div>
                <div className={`${styles.nav_list}`}>
                    <ul className={`${styles[getActiveElement() + '_active']}`}>
                        <li className={`${styles.nav_item} ${asPath === '/' ? styles.h_active : ''}`}><Link href="/">Home</Link></li>
                        <li className={`${styles.nav_item} ${asPath === '/portfolio' ? styles.p_active : ''}`}><Link href="/portfolio">Portfolio</Link></li>
                        <li className={`${styles.nav_item} ${asPath === '/about' ? styles.a_active : ''}`}><Link href="/about">About</Link></li>
                    </ul>
                </div>

            </nav>
            {
                isSidePanelOpen.action ? <div className={`${styles.mobile_nav} ${isSidePanelOpen.trigger ? styles.close_panel : ''}`}>
                    <header className={styles.header}>
                        <FontAwesomeIcon className={styles.close_icon} icon={faTimes} onClick={() => closeSidePanelHandler()} />
                    </header>
                    <ul className={`${styles[getActiveElement() + '_active']}`}>
                        <li className={`${styles.nav_item} ${asPath === '/' ? styles.h_active : ''}`}><Link href="/">Home</Link></li>
                        <li className={`${styles.nav_item} ${asPath === '/portfolio' ? styles.p_active : ''}`}><Link href="/portfolio">Portfolio</Link></li>
                        <li className={`${styles.nav_item} ${asPath === '/about' ? styles.a_active : ''}`}><Link href="/about">About</Link></li>
                    </ul>
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
                </div> : null
            }
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
