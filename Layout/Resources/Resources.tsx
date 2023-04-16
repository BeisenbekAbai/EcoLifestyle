import { SubsectionCard } from '@/Components/SubsecCard/SubsecCard'
import styles from './Resources.module.scss'
import { ResourcesProps } from './Resources.props'
import { useEffect, useState } from 'react'
import database from '@/database.json'



export const ResourcesPage = ({...props}: ResourcesProps): JSX.Element => {
    const [subsections, setSubsections] = useState([])

    const generateSub = () => {
        //@ts-ignore
        let test = []
        let counter = 0
        database.Resources.map(el => {
            test.push(
                <SubsectionCard key={`subsec${counter}`} color='viol' title={el.title} info={el.info}>{el.text}</SubsectionCard>
            )
            counter += 1
        })
        //@ts-ignore
        setSubsections(test)
    }

    useEffect(() => {
        generateSub()
    },[])
    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.article}>Полезные ресурсы</div>
                <div className={styles.items}>
                    {subsections}
                </div>
            </div>
        </div>
    )
}