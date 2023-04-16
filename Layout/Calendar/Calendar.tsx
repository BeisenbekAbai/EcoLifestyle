import { Month } from '@/Components/Month/Month'
import styles from './Calemdar.module.scss'
import { CalendarProps } from './Calendar.props'
import database from '@/database.json'
import { useEffect, useState } from 'react'
import { ArrowIcon } from '@/public/Icons'
import cn from 'classnames'
import { useAppSelector } from '@/Store/hooks/redux'

const calendar = database.Calendar
const eventCal = database.EventCalendar

export const Calendar = ({...props}: CalendarProps): JSX.Element => {
    const [months, setMoths] = useState([])
    const [dateName, setDateName] = useState<string>('')

    const { date, event } = useAppSelector(state => state.DateEvent)
    
    const genearteMonths = () => {
        //@ts-ignore
        let test = []
        let counter = 0
        calendar.map(month => {
            test.push(
                <Month monthnum={counter} monthname={month.name} start={month.start} 
                    daysnum={month.daysNum} eventsList={eventCal[counter]} key={`month${counter}`}/>
            )
            counter += 1
        })
        //@ts-ignore
        setMoths(test)
    }

    const generateDate = () => {
        const input = date;
        const ddate = new Date();
        ddate.setMonth(parseInt(input.substring(0, 2)) - 1);
        ddate.setDate(parseInt(input.substring(2)));

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        //@ts-ignore
        const formattedDate = ddate.toLocaleDateString('ru-RU', options);

        setDateName(formattedDate);
    }

    useEffect(() => {
        generateDate()
    }, [date])

    useEffect(() => {
        genearteMonths()
    },[])

    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.article}>Календарь</div>
                <div className={styles.info}>
                    <div className={styles.info__block}>
                        <div className={styles.info__title}>Дата:</div>
                        <div className={styles.info__event}>{dateName=="Invalid Date"?"Выберите день на календаре":dateName}</div>
                    </div>
                    <br/>
                    <div className={styles.info__block}>
                        <div className={styles.info__title}>Событие:</div>
                        <div className={styles.info__event}>{event=='none'?'Никакое':event}</div>
                    </div>
                </div>
                <div className={styles.months__wrapper}>
                    {months}
                </div>
            </div>
        </div>
    )
}