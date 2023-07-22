import styles from '../../page.module.css'
import fetcher from "@/app/utils/fetcher";
import Link from 'next/link';

export default async function ImageDate({ params }: { params: { date: string } }) {
    const image = await fetcher('static', `&date=${params.date}`);
    return (
        <main className={styles.main}>
            <h2>Imagen del día {params.date}</h2>
            <img src={image.url} alt={image.title} />
            <p><strong>{image.title}</strong></p>               
            <p>{image.explanation}</p><br/>
            <Link style={{marginTop:'20px', color:'blue'}} href="../">Volver</Link> 
        </main>
    )
}