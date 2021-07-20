import styles from './portfolio-grid.module.css';
import Image from 'next/image';

function PortfolioGrid(props: any) {
    const myLoader = () => {
        return `https://via.placeholder.com/800x600.png`
    }

    return (
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
    )
}

export default PortfolioGrid;
