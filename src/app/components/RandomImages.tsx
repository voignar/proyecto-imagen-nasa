import fetcher from '../utils/fetcher'
import {ImageType} from '../types/index'
import Link from 'next/link';

export async function RandomImages(props:any) {
    const imageList = await fetcher('no-cache','&count='+props.images);
    return (
        <div style={{marginTop:'20px'}}>
            <h2>Imagenes Aleatorias</h2>
            {
                imageList?.map((image:ImageType) => (
                    <div key={image.date}>
                    <Link href={`imagen/${image.date}`}>
                    <small>{image.date}</small><br/>
                    <img src={image.url} alt={image.title}  width={500} />
                    
                    <p> {image.title} </p><br/>
                    </Link>
                    </div>
                ))
            }            
        </div>
    )
}