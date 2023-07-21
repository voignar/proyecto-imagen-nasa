import { format, subDays } from 'date-fns'
import fetcher from '../utils/fetcher'
import Image from 'next/image';

export async function LastDays(props:any) {
    const imageLast10Days = await fetcher('revalidate', '&start_date='+format(subDays(new Date(), props.days), 'yyyy-MM-dd')+'&end_date='+format(subDays(new Date(), 1), 'yyyy-MM-dd'));
    return (
        <div>
            <h2>Imagenes de los últimos 10 días</h2>
            {
                imageLast10Days?.reverse().map((image:any) => (
                    <div key={image.id}>
                    <Image src={image.url} alt={image.title}  width={500} height={281} />
                    <p style={{backgroundColor:'#ffffff20',color:'white'}}> {image.title} </p>
                    </div>
                ))
            }            
        </div>
    )
}