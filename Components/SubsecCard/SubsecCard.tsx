import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './SubsecCard.module.scss'
import { SubsectionCardProps } from './SubsecCard.props'
import { useAppDispatch, useAppSelector } from '@/Store/hooks/redux'
import cn from 'classnames'
import { darkeningSlice } from '@/Store/reducers/Darkening'



export const SubsectionCard = ({title, info, children, color, ...props}: SubsectionCardProps): JSX.Element => {
    const [text, setText] = useState([])
    const [activePopup, setActivePopup] = useState<boolean>(false)

    const { activeDarken } = useAppSelector(state => state.Darkening)
    const { setDarkening } = darkeningSlice.actions
    const dispatch = useAppDispatch()

    const generateText = () => {
        //@ts-ignore
        let test = []
        for(let i = 0; i < children.length; i++){
            test.push(
                <div  key={`sssubsecc${i}`}>
                    <p key={`sssubsec${i}`}>{children[i]}</p><br key={`subsecbr${i}`}/>
                </div>
            )
        }
        //@ts-ignore
        setText(test)
    }

    useEffect(() => {
        generateText()
    },[])

    const handleClickTitle = () => {
        dispatch(setDarkening(true))
        setActivePopup(true)
    }

    useEffect(() => {
        if(!activeDarken){
            setActivePopup(false)
        }
    },[activeDarken])

    return(
        <div {...props}>
            <div className={styles.wrapper} style={{borderBottom: `5px solid var(--${color})`}}>
                <button className={styles.title}
                    onClick={() =>handleClickTitle()}
                    style={{backgroundColor: `var(--${color})`}}
                    >{title}
                </button>
                <span className={styles.info}>
                    {info}
                </span>
            </div>
            <div className={cn(styles.popUp, {[styles.popUp__active]: activePopup})}
                style={{border: `3px solid var(--${color})`}}>
                <div className={styles.popUp__title}
                    style={{backgroundColor: `var(--${color})`}}>
                    {title}
                </div>
                <div className={styles.popUp__text}>
                    {text}
                </div>
            </div>
        </div>
    )
}