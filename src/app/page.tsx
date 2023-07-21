import styles from './page.module.css'
import fetcher from './utils/fetcher'
import Image from 'next/image';
import {LastDays} from './components/Lastdays';
import {RandomImages} from './components/RandomImages';

export default async function Home() {
  const imageOfDay = await fetcher('revalidate'); 
  return (
    <main className={styles.main}>
      <h2>Imagen del día</h2>
      <div>
       <Image src={imageOfDay.url} alt={imageOfDay.title}  width={1280} height={720} />
       <p style={{backgroundColor:'#ffffff20',color:'white'}}>{imageOfDay.title}</p>
       <LastDays days='10'/>
       <RandomImages images='10'/>
      </div>
    </main>
  )
}
