import { useAppSelector } from '@/Store/hooks/redux'
import styles from './NewsPage.module.scss'
import { NewsPageProps } from './NewsPage.props'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { NewsCard } from '@/Components/NewsCard/NewsCard'



export const NewsPage = ({...props}): JSX.Element => {
    const { news } = useAppSelector(state => state.NewsSlice)
    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        if(news != undefined){
            generateNews()
        }
    }, [news])


    const generateNews = () => {
        let test = []
        let counter = 12
        let newsCounter = 0
        for(let i = 0; i < counter; i++){
            //@ts-ignore
            if(news.articles ? news.articles[i].urlToImage!=null : true){
                test.push(
                    <NewsCard 
                    //@ts-ignore
                        image={news.articles ? news.articles[i].urlToImage : 'image'} 
                        //@ts-ignore
                        publishedAt={news.articles ? news.articles[i].publishedAt : 'publishedAt'} 
                        //@ts-ignore
                        title={news.articles ? news.articles[i].title : 'title'} 
                        //@ts-ignore
                        url={news.articles ? news.articles[i].url : 'url'}
                        key={`news${newsCounter}`}
                    />
                )
            } else {
                counter += 1
            }
            newsCounter += 1
        }
        //@ts-ignore
        setNewsList(test)
    }

    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.article__wrapper}>
                    <div className={styles.article}>Новости</div>
                </div>
                <div className={styles.news}>
                    {newsList}
                </div>
            </div>
        </div>
    )
}