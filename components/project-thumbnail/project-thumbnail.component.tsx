import styles from './project-thumbnail.module.css';
import Image from 'next/image';

function ProjectThumbnail(props: any) {
    const myLoader = () => {
        return `https://via.placeholder.com/800x600.png`
    }
    return (
        <div className={styles.project_thumbnail}>
            <h1 className={styles.project_indx}>00{props.projectNumber}</h1>
            <div className={styles.project_details}>
                <div className={styles.image_container}>
                    <Image
                        loader={myLoader}
                        src="800x600.png"
                        layout='fill'
                        objectFit="cover"
                        className={styles.images}
                        alt="text" />

                </div>
                <div className={styles.project_description}>
                    <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur nemo dolore est commodi delectus, veritatis et distinctio repellat consequuntur minima minus facilis voluptate soluta. Culpa qui similique laborum voluptate?</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectThumbnail;
