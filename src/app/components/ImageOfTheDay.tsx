import fetcher from '../utils/fetcher'
import styles from './ImageOfTheDay.module.css'

export async function ImageOfTheDay() {
    const imageOfDay = await fetcher('revalidate');
    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Imagen del día</h2>
            <img src={imageOfDay.url} alt={imageOfDay.title} className={styles.image} />
            <p>{imageOfDay.title}</p>        
        </div>
    )
}