import s from "./project.module.css"
import { Descriptor, Members, Comments, Tasks } from "@/widgets"

export const ProjectPage = () => {
    return (
        <div className={s.main}>
            <Descriptor
                src="./images/project1.svg"
                alt="project"
                text="Проєкт спрямований на моніторинг споживання електроенергії в реальному часі. Система дозволяє зменшити витрати та оптимізувати навантаження на мережу."
                title="Smart Energy Monitor"
            />
            <Members />
            <Tasks />
            <Comments />
        </div>
    )
}