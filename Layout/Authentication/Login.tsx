import { CloseIcon } from '@/public/Icons'
import styles from './Login.module.scss'
import { LoginProps } from './Login.props'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { darkeningSlice } from '@/Store/reducers/Darkening'
import { useAppDispatch, useAppSelector } from '@/Store/hooks/redux'
import { authenticationSlice } from '@/Store/reducers/AuthenSlice'



export const Login = ({...props}: LoginProps) => {
    const dispatch = useAppDispatch()
    const { setActiveAuthBlock, setAuthType } = authenticationSlice.actions
    const { authType } = useAppSelector(state => state.AuthenticationReducer)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [mail, setMail] = useState({started: false, color: '', reason: '', text: ''})
    const [psw1, setPsw1] = useState({started: false, color: '', reason: '', text: ''})
    const [psw2, setPsw2] = useState({started: false, color: '', reason: '', text: ''})

    useEffect(() => {
        const emailsList = [
            '@gmail.com', '@yahoo.com', '@hotmail.com', 'outlook.com', 
            '@aol.com', '@icloud.com', '@mail.com', '@gmx.com', 'protonmail.com'
        ]
        for(let i = 0; i < emailsList.length; i++){
            if(mail.text.indexOf(emailsList[i]) > -1){
                setMail({started: true, color: 'green', reason: '', text: mail.text})
                break
            } else if (mail.text != '') {
                setMail({started: true, color: 'yellow1', reason: '', text: mail.text})
            } else if (mail.started) {
                setMail({started: true, color: 'red', reason: '', text: mail.text})
            }
        }
    }, [mail.text])

    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.article}>
                    <div>
                        <button className={cn(styles.article__login, {[styles.article__btn_active]: authType == 1})}
                            onClick={() => dispatch(setAuthType(1))}>
                            Вход
                        </button>
                        <button className={cn(styles.article__signin, {[styles.article__btn_active]: authType == 2})}
                            onClick={() => dispatch(setAuthType(2))}>
                            Регистрация
                        </button>
                    </div>
                    <button className={styles.article__close} onClick={() => dispatch(setActiveAuthBlock(false))}>
                        <CloseIcon className={styles.article__icon}/>
                        </button>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className={styles.inputs}>
                    <label className={styles.inputs__label}>
                        <span className={styles.inputs__text}>Введите Email</span>
                        <input type="text" name="email" placeholder='Введите Email' 
                            style={{border: `2px solid ${mail.color!='gray'?`var(--${mail.color})`:'gray'}`}}
                            onChange={(e) => setMail({text: e.target.value, started: true, color: mail.color, reason: mail.reason})} 
                            className={styles.inputs__inp}/> 
                            {(mail.color=='red') && (
                                <div className={styles.inputs__inp_required}>это поле обязательно</div>
                            )}
                    </label>
                    <div>
                        <label className={styles.inputs__label}>
                            <span className={styles.inputs__text}>Введите пароль</span>
                            <input type={showPassword ? "text" : "password"} name="password" 
                                onChange={(e) => setPsw1({text: e.target.value, started: true, color: mail.color, reason: mail.reason})}
                                placeholder='Введите пароль' className={styles.inputs__inp}/> 
                            {(authType==1) && (
                                <button className={styles.inputs__remind}>напомнить</button>
                            )}
                        </label>
                        {(authType==1) && (
                            <label className={styles.inputs__show}>
                                <input type="checkbox" name="show" onClick={() => setShowPassword(!showPassword)} />
                                <span className={styles.inputs__show_text}>Показать пароль</span>
                            </label>
                        )}
                    </div>
                    {(authType==2) && (<>
                        <label className={styles.inputs__label}>
                            <span className={styles.inputs__text}>Подтвердите пароль</span>
                            <input type={showPassword ? "text" : "password"} name="password2"
                                onChange={(e) => setPsw2({text: e.target.value, started: mail.started, color: mail.color, reason: mail.reason})}
                                placeholder='Введите Email' className={styles.inputs__inp}/>
                        </label>
                        <label className={styles.inputs__show}>
                            <input type="checkbox" name="show" onClick={() => setShowPassword(!showPassword)} />
                            <span className={styles.inputs__show_text}>Показать пароль</span>
                        </label>
                    </>)
                    }
                    <input type="submit" name="submit" value={authType==1 ? "Войти" : "Регистрация"} className={styles.submit}/>
                </form>
            </div>
        </div>
    )
}