import s from "./tasks.module.css"
import { Search, Button } from "@/shared"

export const Tasks = () => {
    return (
        <div className={s.tasks}>
            <section className={s.hat}>
                <span className={s.projectsTitle}>Завдання</span>
                <Search />
            </section>
            <section className={s.items}>
                <div className={s.task}>
                    <div className={s.taskHat}>
                        <div className={s.hatSection}>
                            <span className={s.taskTitle}>Навантаження</span>
                            <span className={s.deadline}>
                                <p className={s.deadlineTitle}>Дедлайн:</p>
                                <p className={s.date}>14.02.2026</p>
                            </span>
                        </div>
                        <span className={s.number}>№18</span>
                    </div>
                    <span className={s.description}>Треба придумати та зробити прототип системи, яка оптимізує навантаження</span>
                    <Button text="Взяти" color="primary" size="small" type="submit" fill={true} />
                </div>
            </section>
        </div>
    )
}