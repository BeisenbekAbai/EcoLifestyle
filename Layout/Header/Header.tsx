import { HeaderProps } from "./Header.props"
import styles from './Header.module.scss'
import { useAppDispatch, useAppSelector } from "@/Store/hooks/redux"
import { activePageSlice } from "@/Store/reducers/ActivePageSlice"
import cn from "classnames"
import { MenuIcon } from "@/public/Icons"
import { useEffect, useState } from "react"
import { authenticationSlice } from '@/Store/reducers/AuthenSlice'
import { darkeningSlice } from "@/Store/reducers/Darkening"




export const Header = ({...props}: HeaderProps): JSX.Element => {
    const [openedMenu, setOpenedMenu] = useState<boolean>(true)
    const { page } = useAppSelector(state => state.ActivePageReducer)
    const { setActivePage } = activePageSlice.actions
    const dispatch = useAppDispatch()
    const { setActiveAuthBlock, setAuthType } = authenticationSlice.actions
    
    return(
        <div {...props}>
            <div className={cn(styles.wrapper, {[styles.wrapper__active]: page != 'WelcomePage'})}>
                <button className={cn(styles.logo, {[styles.logo__active]: page != 'WelcomePage'})}
                    onClick={() => dispatch(setActivePage('HomePage'))}>
                    <img src='logo.png' alt="Logo" width={200} className={styles.logo__image}/>
                </button>
                <div className={cn(styles.nav, {[styles.nav__active]: page != 'WelcomePage'})}>
                    <div className={styles.sections}>
                        <button className={styles.sections__btn} onClick={() => dispatch(setActivePage('HomePage'))}>Главная</button>
                        <button className={styles.sections__btn_2} onClick={() => dispatch(setActivePage('AboutUsPage'))}>О нас</button>
                        <button className={styles.sections__btn_3} onClick={() => dispatch(setActivePage('CalendarPage'))}>Календарь</button>
                        <button className={styles.sections__btn} onClick={() => dispatch(setActivePage('CalculatorPage'))}>Калькулятор</button>
                        <button className={styles.sections__btn_2} onClick={() => dispatch(setActivePage('AdvicesPage'))}>Советы</button>
                        <button className={styles.sections__btn} onClick={() => dispatch(setActivePage('NewsPage'))}>Новости</button>
                        <button className={styles.sections__btn_2} onClick={() => dispatch(setActivePage('ResourcesPage'))}>Ресурсы</button>
                        <button className={styles.sections__btn_2} onClick={() => dispatch(setActivePage('ContactUsPage'))}>Связаться с нами</button>
                    </div>
                    <div className={styles.login}onClick={() => dispatch(setActiveAuthBlock(true))}>
                        <button className={styles.login__btn} onClick={() => dispatch(setAuthType(1))}>Log in</button>
                        <span>/</span>
                        <button className={styles.login__btn} onClick={() => dispatch(setAuthType(2))}>Sign in</button>
                    </div>
                    <div className={styles.menu}>
                        <button className={styles.menu__btn} onClick={() => setOpenedMenu(!openedMenu)}><MenuIcon/></button>
                    </div>
                </div>
            </div>
            <div className={cn(styles.menu__bar_wrapper, {[styles.menu__bar_wrapper_opened]: openedMenu})}>
                <div className={cn(styles.menu__bar, {[styles.menu__bar_opened]: openedMenu})}>
                    <button className={styles.menu__bar_btn} onClick={() => {dispatch(setActivePage('HomePage')); setOpenedMenu(false)}}>Главная</button>
                    <button className={styles.menu__bar_btn} onClick={() => {dispatch(setActivePage('AboutUsPage')); setOpenedMenu(false)}}>О нас</button>
                    <button className={styles.menu__bar_btn} onClick={() => {dispatch(setActivePage('CalendarPage')); setOpenedMenu(false)}}>Календарь</button>
                    <button className={styles.menu__bar_btn} onClick={() => {dispatch(setActivePage('CalculatorPage')); setOpenedMenu(false)}}>Калькулятор</button>
                    <button className={styles.menu__bar_btn} onClick={() => {dispatch(setActivePage('AdvicesPage')); setOpenedMenu(false)}}>Советы</button>
                    <button className={styles.menu__bar_btn} onClick={() => {dispatch(setActivePage('NewsPage')); setOpenedMenu(false)}}>Новости</button>
                    <button className={styles.menu__bar_btn} onClick={() => {dispatch(setActivePage('ResourcesPage')); setOpenedMenu(false)}}>Ресурсы</button>
                    <button className={styles.menu__bar_btn} onClick={() => {dispatch(setActivePage('ContactUsPage')); setOpenedMenu(false)}}>Связаться с нами</button>
                    <button className={styles.menu__bar_btn_last} onClick={() => dispatch(setActiveAuthBlock(true))}>Log in / Sign in</button>
                </div>
            </div>
        </div>
    )
}