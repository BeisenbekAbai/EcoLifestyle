import { SectionCard } from '@/Components/SectionCard/SectionCard'
import styles from './HomePage.module.scss'
import { HomePageProps } from './HomePage.props'
import { CalculatorIcon, CalendarIcon, LampIcon, LeavesIcon, NewsIcon, ResourcesIcon, RocketIcon } from '@/public/Icons'



export const HomePage = ({...props}: HomePageProps): JSX.Element => {
    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    <SectionCard article='О нас' info='Здесь вы можете найти информацию о том, что такое EcoLifestyle.' 
                        pageName='AboutUsPage' color='9ED36A' className={styles.card}>
                        <LeavesIcon/>
                    </SectionCard>
                    <SectionCard article='Календарь' info='Календарь где показаны полезные экологические даты.' 
                        pageName='CalendarPage' color='EA905E' className={styles.card}>
                        <CalendarIcon/>
                    </SectionCard>
                    <SectionCard article='Калькулятор' info='Калькулятор для подсчета - сколько вы употребляете ресурсов. И как их можно сократить.' 
                        pageName='CalculatorPage' color='EA5E5E' className={styles.card}>
                        <CalculatorIcon/>
                    </SectionCard>
                    <SectionCard article='Советы' info='Полезные советы о том, как вести здоровый и экологический образ жизни.' 
                        pageName='AdvicesPage' color='D1D36A' className={styles.card}>
                        <LampIcon/>
                    </SectionCard>
                    <SectionCard article='Новости' info='Последние новости из мира экологии.' 
                        pageName='NewsPage' color='5E9CEA' className={styles.card}>
                        <NewsIcon/>
                    </SectionCard>
                    <SectionCard article='Ресурсы' info='Здесь, вы можете найти много полезных ссылок и информации.' 
                        pageName='ResourcesPage' color='B55EEA' className={styles.card}>
                        <ResourcesIcon/>
                    </SectionCard>
                </div>
            </div>
        </div>
    )
}