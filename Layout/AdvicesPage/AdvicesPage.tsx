import { AdvicesCard } from '@/Components/AdvicesCard/AdvicesCard'
import styles from './AdvicesPage.module.scss'
import { AdvicesPageProps } from './AdvicesPage.props'
import database from '@/database.json'
import { useEffect, useState } from 'react'


const db = database.Advices



export const AdvicesPage = ({...props}: AdvicesPageProps): JSX.Element => {
    const [advicesList, setAdvicesList] = useState([])

    const generateAdvices = () => {
        //@ts-ignore
        let list = []
        let counter = 0
        db.map(el => {
            list.push(
                <AdvicesCard 
                    title={el.title} 
                    image={el.image}
                    text={el.text}
                    key={`advice${counter}`}
                />
            )
            counter += 1
        })
        //@ts-ignore
        setAdvicesList(list)
    }

    useEffect(() => {
        generateAdvices()
    },[])
    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.article}>Советы</div>
                <div className={styles.advices}>
                    {advicesList}
                </div>
            </div>
        </div>
    )
}