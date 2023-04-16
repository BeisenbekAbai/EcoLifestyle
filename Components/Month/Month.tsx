import { MonthProps } from "./Month.props"
import styles from './Month.module.scss'
import { useEffect, useState } from "react"
import { Day } from "../Day/Day"




export const Month = ({start, daysnum, monthname, eventsList, ...props}: MonthProps): JSX.Element => {
    const [days, setDays] = useState([])


    const genearteDays = () => {
        let test = []
        let counter = 1
        let eventCounter = 0
        let addColor = false
        let cellNum = 0
        let testDate = 'null', testEvent = 'null'
        for(let i = 0; i < 42; i++){
            if(counter < 10){
                if(eventsList[eventCounter].date.substr(2) == `0${counter}`){
                    addColor = true
                    testDate = eventsList[eventCounter].date
                    testEvent = eventsList[eventCounter].event
                    eventCounter += 1
                }
            }else if(eventsList[eventCounter].date.substr(2) == `${counter}`){
                addColor = true
                testDate = eventsList[eventCounter].date
                testEvent = eventsList[eventCounter].event
                eventCounter += 1
            }
            //-------------------------------------------------------------------------------------------------------
            if(addColor && cellNum != 0){
                test.push(
                    <Day info_date={testDate} info_event={testEvent} key={`monthday${monthname}${cellNum}`}>
                        {i+1 < start || counter > daysnum ? '' : counter}
                    </Day>
                )
            } else {
                test.push(
                    <div className={styles.items__day} key={`dday${monthname}${cellNum}`}>
                        {i+1 < start || counter > daysnum ? '' : counter}
                    </div>
                )
            }
            //-------------------------------------------------------------------------------------------------------
            if(i+1 >= start){
                counter += 1
            }
            addColor = false
            testDate = 'nothing'
            testEvent = 'nothing'
            cellNum += 1
        }
        //@ts-ignore
        setDays(test)
    }

    useEffect(() => {
        genearteDays()
    },[])
    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.article}>{monthname}</div>
                <div className={styles.dayNames}>
                    <div className={styles.dayNames__day}>Пн</div>
                    <div className={styles.dayNames__day}>Вт</div>
                    <div className={styles.dayNames__day}>Ср</div>
                    <div className={styles.dayNames__day}>Чт</div>
                    <div className={styles.dayNames__day}>Пт</div>
                    <div className={styles.dayNames__day}>Сб</div>
                    <div className={styles.dayNames__day}>Вс</div>
                </div>
                <div className={styles.items}>
                    {days}
                </div>
            </div>
        </div>
    )
}