import { InfoIcon } from '@/public/Icons'
import styles from './SectionCard.module.scss'
import { SectionCardProps } from './SectionCard.props'
import cn from 'classnames'
import { useAppDispatch, useAppSelector } from '@/Store/hooks/redux'
import { activePageSlice } from '@/Store/reducers/ActivePageSlice'



export const SectionCard = ({article, info, pageName, children ,color, ...props}: SectionCardProps): JSX.Element => {
    const { page } = useAppSelector(state => state.ActivePageReducer)
    const { setActivePage } = activePageSlice.actions
    const dispatch = useAppDispatch()
    return(
        <div {...props}>
            <button className={styles.wrapper} style={{backgroundColor: `#${color}`}}
                onClick={() => {dispatch(setActivePage(pageName)); window.scrollTo({top: 0,behavior: "smooth"});}}>
                {children}
            </button>
            <div className={styles.article} style={{backgroundColor: `#${color}`}}>{article}</div>
            <div className={styles.info}>
                <button className={styles.info__btn}>
                    <InfoIcon/>
                </button>
                <div className={styles.info__text}>{info}</div>
            </div>
        </div>
    )
}