import fetcher from '../utils/fetcher'
import Image from 'next/image';

export async function RandomImages(props:any) {
    const imageList = await fetcher('no-cache','&count='+props.images);
    return (
        <div>
            <h2>Imagenes Randoms</h2>
            {
                imageList?.map((image:any) => (
                    <div key={image.id}>
                    <Image src={image.url} alt={image.title}  width={500} height={281} />
                    <p style={{backgroundColor:'#ffffff20',color:'white'}}> {image.title} </p>
                    </div>
                ))
            }            
        </div>
    )
}