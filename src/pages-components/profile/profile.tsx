import s from "./profile.module.css"
import Image from "next/image"
import { Button, Search } from "@/shared"

export const ProfilePage = () => {
    return (
        <div className={s.main}>
            <div className={s.user}>
                <section className={s.description}>
                    <Image src="./images/member1.svg" alt="user" width={190} height={190} />
                    <div className={s.aboutUser}>
                        <span className={s.name}>music enjoyer</span>
                        <p className={s.biography}>люблю музику, програмування та готувати їжу</p>
                    </div>
                </section>
                <Button text="Редагувати" color="primary" type="submit" fill={true} size="small" />
            </div>
            <section className={s.widgets}>
                <div className={`${s.widget} ${s.tasksCount}`}>
                    <span className={s.widgetTitle}>Кількість виконаних завдань</span>
                    <p className={s.widgetCount}>14</p>
                </div>
                <div className={`${s.widget} ${s.teamsCount}`}>
                    <span className={s.widgetTitle}>Кількість команд</span>
                    <p className={s.widgetCount}>1</p>
                </div>
                <div className={`${s.widget} ${s.projectsCount}`}>
                    <span className={s.widgetTitle}>Кількість проектів</span>
                    <p className={s.widgetCount}>10</p>
                </div>
            </section>
        </div>
    )
}