import styles from './portfolio-grid.module.css';
import Image from 'next/image';
import { useState } from 'react';

function PortfolioGrid(props: any) {
    const [activeFilter, setActiveFilter] = useState('all');

    const myLoader = () => {
        return `https://via.placeholder.com/800x600.png`
    }

    return (
        <div className={styles.grid_component}>
            <div className={styles.filter_list}>
                <ul>
                    <li className={`${styles.filter_item} ${activeFilter === 'all' ? styles.active_item : ''}`} onClick={() => setActiveFilter('all')}>All</li>
                    <li className={`${styles.filter_item} ${activeFilter === 'mobile' ? styles.active_item : ''}`} onClick={() => setActiveFilter('mobile')}>Mobile</li>
                    <li className={`${styles.filter_item} ${activeFilter === 'web' ? styles.active_item : ''}`} onClick={() => setActiveFilter('web')}>Web</li>
                    <li className={`${styles.filter_item} ${activeFilter === 'illustrations' ? styles.active_item : ''}`} onClick={() => setActiveFilter('illustrations')}>Illustrations</li>
                </ul>
            </div>
            <div className={styles.portfolio_container}>
                <div className={styles.portfolio_grid}>
                    {
                        new Array(9).fill(0).map((el, idx) => (<div key={idx.toString()} className={styles.grid_item}>
                            <Image
                                loader={myLoader}
                                src="800x600.png"
                                layout='fill'
                                objectFit="cover"
                                className={styles.images}
                                alt="text" />
                            <div className={styles.overlay}>
                                <h1 className={styles.project_title}>Project Name</h1>
                                <p className={styles.show_details} onClick={props.onViewDetails}>Full View</p>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default PortfolioGrid;
