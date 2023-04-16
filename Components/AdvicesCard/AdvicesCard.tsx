import { useEffect, useRef, useState } from 'react'
import styles from './AdivecCard.module.scss'
import { AdvicesCardProps } from './AdvicesCard.props'
import { ArrowIcon } from '@/public/Icons'
import cn from 'classnames'



export const AdvicesCard = ({title, text, image, ...props}: AdvicesCardProps): JSX.Element => {
    const [advicesList, setAdvicesList] = useState([])
    const [opened, setOpened] = useState<boolean>(false)
    const cont = useRef(null)

    const generateAdvicesList = () => {
        let list = []
        for(let i = 0; i < text.length; i++){
            list.push(
                <div className={styles.content__block} key={`adviceCard${i}`}>
                    {`${i+1}) `}
                    {text[i]}
                </div>
            )
        }
        //@ts-ignore
        setAdvicesList(list)
    }

    useEffect(() => {
        generateAdvicesList()
    },[])

    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.article} onClick={() => setOpened(!opened)}>
                    <img src={image} alt="image" className={styles.article__image}/>
                    <div className={styles.article__title}>
                        {title}
                    </div>
                    <div className={cn(styles.article__title_arrow, {[styles.article__title_arrow_active]: opened})}>
                        <ArrowIcon/>
                    </div>
                </div>
                <div className={styles.content__wrapper}>
                    <div className={styles.content} 
                        //@ts-ignore
                        style={{height: `${opened?cont.current.clientHeight:0}px`}}>
                        <div ref={cont}>
                            {advicesList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}