import s from "./prof-teams.module.css"
import { Search, Button } from "@/shared"

export const ProfTeams = () => {
    return (
        <div className={s.teams}>
            <div className={s.hat}>
                <span className={s.title}>Команди</span>
                <Search />
            </div>
            <div className={s.cards}>
                <div className={s.card}>
                    <img src="./images/team.svg" alt="team" className={s.teamImage} />
                    <div className={s.aboutTeam}>
                        <span className={s.teamTitle}>Smart Energy Monitor</span>
                        <div className={s.descriptor}>
                            <ul className={s.ul}>
                                <li className={s.members}>
                                    <span className={s.membersTitle}>Учасників:</span>
                                    <p className={s.countOfMembers}>5</p>
                                </li>
                                <li className={s.position}>Завершений</li>
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