import { WelcomeProps } from "./Welcome.props"
import styles from './Welcome.module.scss'
import { HomeIcon } from "@/public/Icons"
import { Calculator2Icon } from '@/public/Icons'
import { Calendar2Icon } from "@/public/Icons"
import { useAppDispatch, useAppSelector } from "@/Store/hooks/redux"
import { activePageSlice } from "@/Store/reducers/ActivePageSlice"
import cn from 'classnames'
import { useEffect, useState } from "react"




export const Welcome = ({...props}: WelcomeProps): JSX.Element => {
    const { page } = useAppSelector(state => state.ActivePageReducer)
    const { setActivePage } = activePageSlice.actions
    const dispatch = useAppDispatch()
    const [width, setWidth] = useState<number>(0)

    useEffect(() => {
        setWidth(window.innerWidth)
        if((window.innerWidth < 768)){
            dispatch(setActivePage('HomePage'))
        }
    },[])

    return(
        <div {...props} style={{display: `${width<768?'none':'block'}`}}>
            <div className={cn(styles.wrapper, {[styles.wrapper__active]: page == 'WelcomePage'})}>
                <div className={styles.background__wrapper}>
                    <div className={styles.background}/>
                </div>
                <div className={styles.line}/>
                <div className={styles.nav}>
                    <button className={styles.nav__btn1} onClick={() => dispatch(setActivePage('CalculatorPage'))}><Calculator2Icon/></button>
                    <button className={styles.nav__btn2} onClick={() => dispatch(setActivePage('HomePage'))}><HomeIcon/></button>
                    <button className={styles.nav__btn3} onClick={() => dispatch(setActivePage('CalendarPage'))}><Calendar2Icon/></button>
                </div>
            </div>
        </div>
    )
}