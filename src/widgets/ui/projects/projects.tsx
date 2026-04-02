import s from "./projects.module.css"
import Image from "next/image"
import { Button } from "@/shared"

export const Projects = () => {
    return (
        <div className={s.projects}>
            <section className={s.hat}>
                <div className={s.hatSection}>
                    <span className={s.projectsTitle}>Проекти</span>
                    <div className={s.search}>
                        <input type="text" className={s.searchField} placeholder="Пошук" />
                        <Image src="./images/search.svg" width={22} height={22} alt="search" />
                    </div>
                </div>
                <Button text="Новий проект" color="primary" type="button" fill={true} size="small" />
            </section>
            <div className={s.projectsList}>
                <div className={s.project}>
                    <Image src="./images/project1.svg" alt="project" width={150} height={150} />
                    <div className={s.projectDescriptor}>
                        <section className={s.projectDescriptorHat}>
                            <div className={s.projectDescription}>
                                <span className={s.projectTitle}>Smart Energy Monitor</span>
                                <span className={s.countOfMembers}>5 учасників</span>
                                <span className={s.date}>15.02.2014</span>
                            </div>
                            <p className={s.status}>Завершений</p>
                        </section>
                        <span className={s.aboutProject}>Проєкт спрямований на моніторинг споживання електроенергії в реальному часі. Система дозволяє зменшити витрати та оптимізувати навантаження на мережу.</span>
                    </div>
                </div>
                <div className={s.project}>
                    <Image src="./images/project2.svg" alt="project" width={150} height={150} />
                    <div className={s.projectDescriptor}>
                        <section className={s.projectDescriptorHat}>
                            <div className={s.projectDescription}>
                                <span className={s.projectTitle}>RoboLine</span>
                                <span className={s.countOfMembers}>8 учасників</span>
                                <span className={s.date}>23.11.2023</span>
                            </div>
                            <p className={s.status}>На фінальній стадії</p>
                        </section>
                        <span className={s.aboutProject}>Автоматизована лінія для сортування продукції. Проєкт використовує датчики та мікроконтролери для підвищення точності виробництва.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}