import { useEffect, useState } from 'react'
import styles from './Calulator.module.scss'
import { Popup } from '@/Components/Popup/Popup'
import { useAppSelector } from '@/Store/hooks/redux'
import cn from 'classnames'
import database from '@/database.json'

const db = database.Calculator



export const Calculator = ({...props}): JSX.Element => {
    const { resourceType } = useAppSelector(state => state.ResTypeReducer)
    const [powerNum, setPowerNum] = useState<number>(15)
    const [powerUnit, setPowerUnit] = useState<number>(2)
    const [timeH, setTimeH] = useState<number>(24)
    const [timeD, setTimeD] = useState<number>(0)
    const [timeM, setTimeM] = useState<number>(0)
    const [humanCount, setHumanCount] = useState<number>(1)
    const [timeH2, setTimeH2] = useState<number>(1)
    const [timeD2, setTimeD2] = useState<number>(1)
    const [timeM2, setTimeM2] = useState<number>(1)
    const [timeHRes, setTimeHRes] = useState<number>(0)
    const [timeDRes, setTimeDRes] = useState<number>(0)
    const [timeMRes, setTimeMRes] = useState<number>(0)
    const [resTitle, setResTitle] = useState<string>('')
    const [resText, setResText] = useState<string>('')

    
    const handleClickSubmit = () => {
        let time = timeH + timeD*24 + timeM*720
        let power = 0
        let resH = 0
        let resD = 0
        let resM = 0
        if(powerUnit == 1){
            power = powerNum / 1000
        } else {
            power = powerNum
        }
        if(time == 0){
            setTimeHRes(0)
            setTimeDRes(0)
            setTimeMRes(0)
        } else if(humanCount == 0){
            setTimeHRes(0)
            setTimeDRes(0)
            setTimeMRes(0)
        } else {
            if(resourceType=='Электричество'){
                resH = Math.round(power / humanCount / time * timeH2 * 100) / 100
                resD = Math.round(power / humanCount / time * 24 * timeD2 * 100) / 100
                resM = Math.round(power / humanCount / time * 720 * timeM2 * 100) / 100
                let consLev = Math.round(power / humanCount / time * 720 * 100) / 100
                if(consLev < 300){
                    setResTitle('Ниже Среднего')
                    setResText(db.electricity.low)
                } else if (300 <= consLev && consLev <= 450) {
                    setResTitle('Средний')
                    setResText(db.electricity.medium)
                } else {
                    setResTitle('Выше Среднего')
                    setResText(db.electricity.high[0] + `${consLev - 450}` + db.electricity.high[1])
                }
            } else if (resourceType=='Вода'){
                resH = Math.round(power / humanCount / time * timeH2 * 100000) / 100
                resD = Math.round(power / humanCount / time * 24 * timeD2 * 100000) / 100
                resM = Math.round(power / humanCount / time * 720 * timeM2 * 100000) / 100
                let consLev = Math.round(power / humanCount / time * 720 * 100000) / 100
                if(consLev < 3000) {
                    setResTitle('Ниже Среднего')
                    setResText(db.water.low)
                } else if (3000 <= consLev && consLev <= 6000){
                    setResTitle('Средний')
                    setResText(db.water.medium)
                } else {
                    setResTitle('Выше Среднего')
                    setResText(db.water.high[0] + `${consLev - 6000}` + db.water.high[1])
                }
            } else if (resourceType=='Газ'){
                resH = Math.round(power / humanCount / time * timeH2 * 100) / 100
                resD = Math.round(power / humanCount / time * 24 * timeD2 * 100) / 100
                resM = Math.round(power / humanCount / time * 720 * timeM2 * 100) / 100
                let consLev = Math.round(power / humanCount / time * 720 * 100) / 100
                if(consLev < 10) {
                    setResTitle('Ниже Среднего')
                    setResText(db.gas.low)
                } else if (10 <= consLev && consLev <= 30){
                    setResTitle('Средний')
                    setResText(db.gas.medium)
                } else {
                    setResTitle('Выше Среднего')
                    setResText(db.gas.high)
                }
            }
            setTimeHRes(resH)
            setTimeDRes(resD)
            setTimeMRes(resM)
        }
    }

    const ResetFormFunc = () => {
        setPowerNum(15)
        setPowerUnit(2)
        setTimeH(24)
        setTimeD(0)
        setTimeM(0)
        setTimeH2(1)
        setTimeD2(1)
        setTimeM2(1)
        setTimeHRes(0)
        setTimeDRes(0)
        setTimeMRes(0)
        setHumanCount(1)
        setResTitle('Пока что пусто')
        setResText('Заполните форму и нажмите на кнопку "Рассчитать", что бы узнать ваш уровень потребления.')
    }

    useEffect(() => {
        ResetFormFunc()
    },[resourceType])

    return(
        <div {...props}>
        <div className={styles.article}>Калькулятор</div>
            <div className={styles.wrapper}>
                <div className={styles.calc}>
                    <Popup/>
                    <div className={styles.calc__wrapper}>
                        <div className={styles.power}>
                            <span className={styles.power__text}>
                                Введите потребление 
                                {resourceType=='Электричество' ? ' электроэнергии' : resourceType=='Вода' ? ' воды' : ' газа'}:
                            </span>
                            <div className={styles.power__power}>
                                <input className={styles.power__input} type='number' 
                                    //@ts-ignore
                                    onChange={(e) => setPowerNum(e.target.value)}
                                    value={powerNum}/>
                                <div className={styles.power__types}>
                                    {resourceType=='Газ'? [] :
                                    <button className={cn(styles.power__option, {[styles.power__option_active]: powerUnit == 1})}
                                        onClick={() => setPowerUnit(1)}
                                        >
                                        {resourceType=='Электричество'?'Вт':'л'}
                                    </button>
                                    }
                                    <button className={cn(styles.power__option, {[styles.power__option_active]: powerUnit == 2})}
                                        onClick={() => setPowerUnit(2)}
                                        >
                                        {resourceType=='Электричество'?'кВт':'м³'}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.time}>
                            <div className={styles.time__block}>
                                <span className={styles.time__text}>Час:</span>
                                <input type='number' className={styles.time__input}
                                    //@ts-ignore
                                    onChange={(e) => setTimeH(e.target.value)} value={timeH}/>
                            </div>
                            <div className={styles.time__block}>
                                <span className={styles.time__text}>День:</span>
                                <input type='number' className={styles.time__input}
                                    //@ts-ignore
                                    onChange={(e) => setTimeD(e.target.value)} value={timeD}/>
                            </div>
                            <div className={styles.time__block}>
                                <span className={styles.time__text}>Месяц:</span>
                                <input type='number' className={styles.time__input}
                                    //@ts-ignore
                                    onChange={(e) => setTimeM(e.target.value)} value={timeM}/>
                            </div>
                        </div>
                        <div className={styles.people}>
                            <span className={styles.people__text}>Число людей:</span>
                            <input type="number" className={styles.people__input}
                                    //@ts-ignore
                                    onChange={(e) => setHumanCount(e.target.value)} value={humanCount}/>
                        </div>
                        <div className={styles.buttons__wrapper}>
                            <div className={styles.buttons}>
                                <button className={styles.buttons__btn}
                                    onClick={() => handleClickSubmit()}>
                                    Рассчитать
                                </button>
                                <button className={styles.buttons__btn}
                                    onClick={() => ResetFormFunc()}>
                                    Сбросить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.resultat}>
                    <div className={styles.resultat__text}>Результаты:</div>
                    <div className={styles.resultat__info}>
                        <div className={styles.resultat__info_time}>Период</div>
                        <div className={styles.resultat__info_wastes}>
                            потребление
                            ({resourceType=='Электричество' ? 'кВт-ч' : resourceType=='Вода' ? 'литр' : 'м³'})
                        </div>
                    </div>
                    <div className={styles.resultat__blocks}>
                        <div className={styles.resultat__block}>
                            <div className={styles.resultat__block_time}>
                                <input type="number" className={styles.resultat__input}
                                        //@ts-ignore
                                    onChange={(e) => setTimeH2(e.target.value)} value={timeH2}/>
                                <span>час</span>
                            </div>
                            <div className={styles.resultat__block_wastes}>{timeHRes}</div>
                        </div>
                        <div className={styles.resultat__block}>
                            <div className={styles.resultat__block_time}>
                                <input type="number" className={styles.resultat__input}
                                        //@ts-ignore
                                    onChange={(e) => setTimeD2(e.target.value)} value={timeD2}/>
                                <span>день</span>
                            </div>
                            <div className={styles.resultat__block_wastes}>{timeDRes}</div>
                        </div>
                        <div className={styles.resultat__block}>
                            <div className={styles.resultat__block_time}>
                                <input type="number" className={styles.resultat__input}
                                        //@ts-ignore
                                    onChange={(e) => setTimeM2(e.target.value)} value={timeM2}/>
                                <span>месяц</span>
                            </div>
                            <div className={styles.resultat__block_wastes}>{timeMRes}</div>
                        </div>
                    </div>
                    <div className={styles.part3}>
                        <div className={styles.part3__top}>
                            <div className={styles.part3__top_text}>Уровень:</div>
                            <div className={styles.part3__top_title}>{resTitle}</div>
                        </div>
                        <div className={styles.part3__text}>{resText}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}