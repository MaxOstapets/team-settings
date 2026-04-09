import { Button, Search } from "@/shared";
import s from "./prof-projects.module.css"

export const ProfProjects = () => {
    return (
        <div className={s.projects}>
            <div className={s.hat}>
                <span className={s.title}>Проекти</span>
                <Search />
            </div>
            <div className={s.cards}>
                <div className={s.card}>
                    <img src="./images/project1.svg" alt="project" className={s.projectImage} />
                    <div className={s.aboutProject}>
                        <span className={s.projectTitle}>Smart Energy Monitor</span>
                        <div className={s.descriptor}>
                            <ul className={s.ul}>
                                <li className={s.members}>
                                    <span className={s.membersTitle}>Учасників:</span>
                                    <p className={s.countOfMembers}>5</p>
                                </li>
                                <li className={s.state}>Завершений</li>
                                <li className={s.date}>15.02.2024</li>
                            </ul>
                        </div>
                        <Button color="secondary" text="Переглянути" fill={true} size="small" type="submit" cN={s.checkButton} />
                    </div>
                </div>
            </div>
        </div>
    )
}