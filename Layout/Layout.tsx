import { useAppDispatch, useAppSelector } from '@/Store/hooks/redux'
import { Header } from './Header/Header'
import styles from './Layout.module.scss'
import { Welcome } from './Welcome/Welcome'
import { activePageSlice } from '@/Store/reducers/ActivePageSlice'
import cn from 'classnames'
import { HomePage } from './HomePage/HomePage'
import { AboutUs } from './AboutUs/AboutUs'
import { ResourcesPage } from './Resources/Resources'
import { darkeningSlice } from '@/Store/reducers/Darkening'
import { useEffect, useRef } from 'react'
import { Calendar } from './Calendar/Calendar'
import { Calculator } from './Calculator/Caluclator'
import { NewsPage } from './NewsPage/NewsPage'
import { newsSlice } from '@/Store/reducers/NewsSlice'
import { LayoutProps } from './Layout.props'
import { ContactUs } from './ContactUs/ContactUs'
import { AdvicesPage } from './AdvicesPage/AdvicesPage'
import { Login } from './Authentication/Login'
import { authenticationSlice } from '@/Store/reducers/AuthenSlice'




export const Layout = ({newsData}: LayoutProps): JSX.Element => {
    const darkenBlock = useRef(null)
    const { page } = useAppSelector(state => state.ActivePageReducer)
    const { setActivePage } = activePageSlice.actions
    const dispatch = useAppDispatch()
    const { activeDarken } = useAppSelector(state => state.Darkening)
    const { setDarkening } = darkeningSlice.actions
    const { setNews } = newsSlice.actions
    const { authBlockActive } = useAppSelector(state => state.AuthenticationReducer)
    const { setActiveAuthBlock } = authenticationSlice.actions

    const handleClickBackground = () => {
        dispatch(setActiveAuthBlock(false))
        dispatch(setDarkening(false))
    }

    useEffect(() => {
        if(authBlockActive){
            dispatch(setDarkening(true))
        } else {
            dispatch(setDarkening(false))
        }
    }, [authBlockActive])

    useEffect(() => {
        dispatch(setNews(newsData))
    },[])

    useEffect(() => {
        //@ts-ignore
        darkenBlock.current.style.height = `${document.documentElement.scrollHeight}px`
    },[activeDarken])
    return(
        <>
            <div className={styles.wrapper}>
                <div className={cn(styles.darkening, {[styles.darkening__active]: activeDarken})}
                    onClick={() => handleClickBackground()} ref={darkenBlock}/>
                <Header/>
                <Welcome className={cn(styles.page, {[styles.page__active]: page == 'WelcomePage'})}/>
                <HomePage className={cn(styles.page, {[styles.page__active]: page == 'HomePage'})}/>
                <AboutUs className={cn(styles.page, {[styles.page__active]: page == 'AboutUsPage'})}/>
                <ResourcesPage className={cn(styles.page, {[styles.page__active]: page == 'ResourcesPage'})}/>
                <Calendar className={cn(styles.page, {[styles.page__active]: page == 'CalendarPage'})}/>
                <Calculator className={cn(styles.page, {[styles.page__active]: page == 'CalculatorPage'})}/>
                <NewsPage className={cn(styles.page, {[styles.page__active]: page == 'NewsPage'})}/>
                <ContactUs className={cn(styles.page, {[styles.page__active]: page == 'ContactUsPage'})}/>
                <AdvicesPage className={cn(styles.page, {[styles.page__active]: page == 'AdvicesPage'})}/>
                <Login className={cn(styles.login, {[styles.login__active]: authBlockActive})}/>
            </div>
        </>
    )
}