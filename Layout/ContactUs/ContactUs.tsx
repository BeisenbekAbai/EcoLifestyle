import styles from './ContactUs.module.scss'
import { ContactUsProps } from './ContactUs.props'
import emailjs from 'emailjs-com'



export const ContactUs = ({...props}: ContactUsProps): JSX.Element => {

    const sendEmail = (e: any) => {
        e.preventDefault()

        emailjs.sendForm('service_s9plnwn', 'template_s8e6q0c', e.target, 'z44Y6MeN93RWVkvkJ')
            .then((result) => {
                alert('The message has been sent!')
            },
            (error) => {
                console.log(error.text)
            })
            
        e.preventDefault()
    }
    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.article}>Связаться с нами</div>
                <form onSubmit={sendEmail}>
                    <div className={styles.names}>
                        <div className={styles.names__block_wrapper}>
                            <label className={styles.names__block}>
                                <div className={styles.names__text}>Введите имя:</div>
                                <input type="text" name="from_firstName" className={styles.names__input} placeholder='Имя'/>
                            </label>
                        </div>
                        <div className={styles.names__block_wrapper2}>
                            <label className={styles.names__block}>
                                <div className={styles.names__text}>Введите фамилию:</div>
                                <input type="text" name="from_lastName" className={styles.names__input} placeholder='Фамилия'/>
                            </label>
                        </div>
                    </div>
                    <div className={styles.email}>
                        <label>
                            <div className={styles.email__text}>Введите email адрес:</div>
                            <input type="email" name="from_email" className={styles.email__input} placeholder='Email адрес'/>
                        </label>
                    </div>
                    <div className={styles.message}>
                        <label>
                            <div className={styles.message__text}>Введите сообщение</div>
                            <textarea name="from_message" className={styles.message__input} placeholder='Сообщение'/>
                        </label>
                    </div>
                    <div className={styles.buttons}>
                        <input type='submit' className={styles.buttons__btn} value="Отправить"/>
                        <input type='reset' className={styles.buttons__btn} value="Сбросить"/>
                    </div>
                </form>
            </div>
        </div>
    )
}