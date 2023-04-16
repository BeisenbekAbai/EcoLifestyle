import styles from './AboutUs.module.scss'
import { AboutUsProps } from './AboutUs.props'



export const AboutUs = ({...props}: AboutUsProps): JSX.Element => {
    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.ecolife}>
                    <div className={styles.ecolife__article}>Что такое EcoLifestyle?</div>
                    <div className={styles.ecolife__info}>
                        В целом, сайт "EcoLifestyle" направлен на то, 
                        чтобы помочь людям понять важность экологического мышления и действий в повседневной жизни, а также дать им возможность 
                        принимать осознанные решения в пользу 
                        окружающей среды и сохранения природных 
                        ресурсов для будущих поколений.
                    </div>
                </div>
                <div className={styles.purpose}>
                    <div className={styles.purpose__article}>Наши цели</div>
                    <div className={styles.purpose__title}>
                        <div className={styles.purpose__circle}/>
                        <span>Предоставить вам практические ресурсы.</span>
                    </div>
                    <div className={styles.purpose__title}>
                        <div className={styles.purpose__circle}/>
                        <span>Предоставить возможность принять участие в экологических инициативах.</span>
                    </div>
                    <div className={styles.purpose__title}>
                        <div className={styles.purpose__circle}/>
                        <span>Помочь вести осознанный и экологический образ жизни.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}