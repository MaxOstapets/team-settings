import s from "./team.module.css"
import { Button } from "@/shared"
import { Descriptor, Members, Projects, Comments } from "@/widgets"

export const TeamPage = () => {
    return (
        <div className={s.team}>
            <Descriptor src="./images/team.svg" alt="team" title="Ilianors" text="ми команда, яка прагне чітко виконувати роботу та бути корисними. любимо грати в боулінг на вихідних" />
            <Members />
            <Projects />
            <Comments />
            <Button text="Покинути команду" type="submit" color="secondary" fill={true} cN={`${s.leaveTheTeam}`} size="small" />
        </div>
    )
}