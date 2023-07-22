import { format, subDays } from 'date-fns'
import fetcher from '../utils/fetcher'
import Image from 'next/image';
import {ImageType} from '../types/index'
import Link from 'next/link';

export async function LastDays(props:any) {
    const imageLast10Days = await fetcher('revalidate', '&start_date='+format(subDays(new Date(), props.days), 'yyyy-MM-dd')+'&end_date='+format(subDays(new Date(), 1), 'yyyy-MM-dd'));
    return (
        <div style={{marginTop:'20px'}}>
            <h2>Imagenes de los últimos 10 días</h2>
            {
                imageLast10Days?.reverse().map((image:ImageType) => (
                    <div key={image.date}>
                    <Link href={`imagen/${image.date}`}>
                    <Image src={image.url} alt={image.title}  width={500} height={281} />
                    <p> {image.title} </p>
                    </Link>
                    </div>
                ))
            }            
        </div>
    )
}