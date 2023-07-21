import styles from './page.module.css'
import fetcher from './utils/fetcher'
import {LastDays} from './components/Lastdays';
import {RandomImages} from './components/RandomImages';
import { ImageOfTheDay } from './components/ImageOfTheDay';

export default async function Home() {
  const imageOfDay = await fetcher('revalidate'); 
  return (
    <main className={styles.main}>
       <ImageOfTheDay/>
       <LastDays days='10'/>
       <RandomImages images='10'/>
    </main>
  )
}
