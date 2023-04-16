import { useAppDispatch } from '@/Store/hooks/redux'
import styles from './Day.module.scss'
import { DayProps } from './Day.props'
import { dateEventSlice } from '@/Store/reducers/EventDate'



export const Day = ({info_date, info_event, children, ...props}: DayProps): JSX.Element => {
    const dispatch = useAppDispatch()
    const { setEventDate } = dateEventSlice.actions
    return(
        <button className={styles.wrapper} 
            onClick={() => dispatch(setEventDate({
                Date: info_date,
                Event: info_event
            }))}
            {...props}>
            {children}
        </button>
    )
}