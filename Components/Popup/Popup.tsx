import { useState } from 'react'
import styles from './Popup.module.scss'
import { PopupProps } from './Popup.props'
import cn from 'classnames'
import { useAppDispatch, useAppSelector } from '@/Store/hooks/redux'
import { resTypeSlice } from '@/Store/reducers/ResTypeSlice'



export const Popup = ({...props}: PopupProps): JSX.Element => {
    const [opened, setOpened] = useState<boolean>(false)

    const dispatch = useAppDispatch()
    const { setResType } = resTypeSlice.actions
    const { resourceType } = useAppSelector(state => state.ResTypeReducer)

    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.text}>Выберите тип ресурса:</div>
                <div className={styles.nav}>
                    <div className={cn(styles.selected, {[styles.selected__opened]: opened})} onClick={() => setOpened(!opened)}>
                        {resourceType}
                    </div>
                    <div className={cn(styles.items, {[styles.items__opened]: opened})}>
                        <div className={styles.option} 
                            onClick={() => {dispatch(setResType('Электричество')); setOpened(false)}}
                            >
                            Электричесво
                        </div>
                        <div className={styles.option}
                            onClick={() => {dispatch(setResType('Вода')); setOpened(false)}}
                            >
                            вода
                        </div>
                        <div className={cn(styles.option, styles.items__last)}
                            onClick={() => {dispatch(setResType('Газ')); setOpened(false)}}
                            >
                            Газ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}