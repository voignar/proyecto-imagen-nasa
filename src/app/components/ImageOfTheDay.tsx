import { format, subDays } from 'date-fns'
import fetcher from '../utils/fetcher'
import Image from 'next/image';

export async function ImageOfTheDay() {
    const imageOfDay = await fetcher('revalidate');
    return (
        <div>
            <h2>Imagen del día</h2>
            <Image src={imageOfDay.url} alt={imageOfDay.title}  width={1280} height={720} />
            <p style={{backgroundColor:'#ffffff20',color:'white'}}>{imageOfDay.title}</p>            
        </div>
    )
}