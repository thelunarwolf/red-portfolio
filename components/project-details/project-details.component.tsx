import { faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './project-details.module.css';

export default function ProjectDetails(props: any) {
    return (
        <div>
            <header className={styles.header}>
                <FontAwesomeIcon className={styles.close_icon} icon={faTimes} onClick={() => props.onClose()} />
            </header>
            <section className={styles.page_data}>
                <div className={styles.title_section}>
                    <p className={styles.sub_title}>Project- May 2021</p>
                    <h1 className={styles.project_title}>Riti - Fasion Shopping App</h1>
                </div>
                <div className={styles.project_image}>
                    hello
                </div>
                <div className={styles.details_section}>
                    <div className={styles.details_item}>
                        <p className={styles.details_item_title}>Description</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sapiente et numquam fugiat saepe laborum harum optio explicabo nostrum dolorem.</p>
                    </div>
                    <div className={styles.details_item}>
                        <p className={styles.details_item_title}>Role</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className={styles.details_item}>
                        <p className={styles.details_item_title}>Client</p>
                        <p>None. Personal Debut Project</p>
                    </div>
                </div>
            </section>
            <footer className={styles.footer}>
                <p className={styles.copyright}>© 2021 Virija Tejavath | virijaxx@gmail.com</p>
                <div className={styles.icons}>
                    <FontAwesomeIcon className={styles.icon} icon={faBehance} />
                    <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
                </div>
            </footer>
        </div>
    )
}
