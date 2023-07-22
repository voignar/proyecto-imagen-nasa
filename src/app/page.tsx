import styles from './page.module.css'
import {LastDays} from './components/Lastdays';
import {RandomImages} from './components/RandomImages';
import { ImageOfTheDay } from './components/ImageOfTheDay';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<p>Cargando imagen del día</p>}>
       <ImageOfTheDay/>
      </Suspense>
      <Suspense fallback={<p>Cargando las imagenes de los últimos 10 días</p>}>
       <LastDays days='10'/>
       </Suspense>
       <Suspense fallback={<p>Cargando imagenes aleatorias</p>}>
       <RandomImages images='10'/>
       </Suspense>
    </main>
  )
}
