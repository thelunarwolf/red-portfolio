import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ProjectThumbnail from '../project-thumbnail/project-thumbnail.component';
import styles from './home-layout.module.css';

function HomeLayout() {
    let [active, setActive] = useState(0);
    const getProjectStyles = () => {
        return {
            flex: 1,
            minWidth: '90%',
            transition: '1s ease-in',
            transform: `translateX(-${(active * 100)}%)`,
        }
    }

    return (
        <div className={styles.layout}>
            <div className={styles.carousel_container}>
                {
                    [1, 2, 3, 4].map((el) => <div style={getProjectStyles()} key={el.toString()}><ProjectThumbnail projectNumber={el.toString()} /></div>)
                }
            </div>
            <div className={styles.navigation}>
                <div>
                    {
                        active > 0 ? (<p className={styles.nav_icons} onClick={() => setActive(--active)}>
                            <FontAwesomeIcon height={20} icon={faAngleLeft} />
                        </p>) : null
                    }
                </div>
                <div>
                    {
                        active < 3  ? (<p className={styles.nav_icons} onClick={() => setActive(++active)}>
                            <FontAwesomeIcon height={20} icon={faAngleRight} />
                        </p>) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeLayout;
