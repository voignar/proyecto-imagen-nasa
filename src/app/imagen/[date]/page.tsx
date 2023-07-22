import fetcher from "@/app/utils/fetcher";
import Image from "next/image";
export default async function ImageDate({ params }: { params: { date: string } }) {
    const image = await fetcher('', `&date=${params.date}`);
    return (
        <div>
            <h2>Imagen del día {params.date}</h2>
            <Image src={image.url} alt={image.title}  width={1280} height={720} />
            <p><strong>{image.title}</strong></p>               
            <p>{image.explanation}</p>    
        </div>
    )
}