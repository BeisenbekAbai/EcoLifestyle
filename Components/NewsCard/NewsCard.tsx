import { useEffect, useState } from 'react'
import styles from './NewsCard.module.scss'
import { NewsCardProps } from './NewsCard.props'



export const NewsCard = ({image, publishedAt, title, url, ...props}: NewsCardProps): JSX.Element => {
    const [date, setDate] = useState<string>('')
    
    useEffect(() => {
        generateDate()
    },[])

    const generateDate = () => {
        const isoDate = publishedAt;
        const date = new Date(isoDate);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        //@ts-ignore
        const formattedDate = date.toLocaleDateString('ru-RU', options);

        setDate(formattedDate);
    }

    return(
        <div {...props}>
            <div className={styles.wrapper} onClick={() => window.open(url, '_blank')}>
                <img src={image} alt="image" className={styles.image}/>
                <div className={styles.title}>{title}</div>
                <div className={styles.date}>
                    <span className={styles.date__text}>Опубликованно: </span>
                    <span className={styles.date__num}>{date}</span>
                </div>
            </div>
        </div>
    )
}